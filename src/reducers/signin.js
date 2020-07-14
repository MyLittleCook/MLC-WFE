import { SET_IS_SIGN_IN, SET_NICK_NAME } from '../actions/ActionTypes'

const initialState = {
    isSignIn: false,
    nickName: ''
};

function signin(state = initialState, action) {
    switch (action.type) {
        case SET_IS_SIGN_IN:
            return { ...state, isSignIn: action.isSignIn };
        case SET_NICK_NAME:
            return { ...state, nickName: action.nickName };
        default:
            return state;
    }
}

export default signin;