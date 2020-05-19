import { TReactComponentType } from './Models';
import withController from './withController';

function Controller<C extends TReactComponentType>(BaseComponent: C): C {
    return withController(BaseComponent);
}

export default Controller;
