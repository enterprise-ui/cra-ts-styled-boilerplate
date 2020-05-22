import React, {useEffect} from 'react';

import {useStore} from 'react-redux';
import {END} from 'redux-saga';

import {IReactFunctionComponent, TReactComponentType} from './Models';
import {qs2json} from './Utils';

function withInitialProps<C extends TReactComponentType<TProps>, TProps = {}>(
  TargetComponent: C,
): C {
  const EnhancedComponent: IReactFunctionComponent<TProps> = (props) => {
    const store = useStore();
    const Component = TargetComponent as TReactComponentType<TProps>;

    useEffect(() => {
      EnhancedComponent.getInitialProps && EnhancedComponent.getInitialProps({ props, store });
    }, [props, store]);

    return <Component {...props} />;
  };

  EnhancedComponent.displayName = `withInitialProps.(${
    TargetComponent.displayName || TargetComponent.name || 'TargetComponent'
  })`;

  EnhancedComponent.getInitialProps = async ({ props, store }) => {
    const { isServer, location } = props;
    const routeProps = { queryParams: qs2json(location.search) };
    let staticProps = {};

    if (TargetComponent.getInitialProps) {
      staticProps = await TargetComponent.getInitialProps({
        store,
        props: { ...props, ...routeProps },
      });
    }

    if (isServer) {
      store.dispatch(END);
      await store.sagaTask?.toPromise();
    }

    return { ...staticProps };
  };

  return EnhancedComponent as C;
}

export default withInitialProps;
