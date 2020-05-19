import { SET_CONFIG } from '../constants/config';

export default (state = {}, action: any) => {
  switch (action.type) {
    case SET_CONFIG:
      return {
        ...state,
        ...action.value,
      };
    default:
      return state;
  }
};
