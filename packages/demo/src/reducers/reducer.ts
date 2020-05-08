import {GET_DATA_SUCCESS} from '../consts';

const reducer = (state = [], action: any) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};

export {reducer};
