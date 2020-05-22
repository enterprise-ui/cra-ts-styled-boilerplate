import { TReactComponentType } from './Models';
import withInitialProps from './withInitialProps';

function InitialPropsDecorator<C extends TReactComponentType>(BaseComponent: C): C {
    return withInitialProps(BaseComponent);
}

export default InitialPropsDecorator;
