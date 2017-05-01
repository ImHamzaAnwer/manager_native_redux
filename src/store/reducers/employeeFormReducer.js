import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS, KHALLI_KARAO } from '../actions/types';


const INITIAL_STATE = { name: "", phone: "", shift: "" }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }

        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        
        case KHALLI_KARAO:
            return {...state, name: "cahaha", phone: "chahca"};

        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        
        default:
            return state;
    }
}