import { SET_SIGNINUP_MODAL_SHOW } from '../actions/ActionTypes'

const initialState = {
    signInUpModalShow: false
};

function modal(state = initialState, action) {
    switch (action.type) {
        case SET_SIGNINUP_MODAL_SHOW:
            return { ...state, signInUpModalShow: action.signInUpModalShow };
        default:
            return state;
    }
}

export default modal;