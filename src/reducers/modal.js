import { SET_SIGNINUP_MODAL_SHOW, SET_INGREDIENT_MODAL_SHOW, SET_FRIDGE_MODAL_SHOW } from '../actions/ActionTypes'

const initialState = {
    signInUpModalShow: false,
    ingredientModalShow: false,
    fridgeModalShow: false,
    fridgeModalKind: ''
};

function modal(state = initialState, action) {
    switch (action.type) {
        case SET_SIGNINUP_MODAL_SHOW:
            return { ...state, signInUpModalShow: action.signInUpModalShow };
        case SET_INGREDIENT_MODAL_SHOW:
            return { ...state, ingredientModalShow: action.ingredientModalShow };
        case SET_FRIDGE_MODAL_SHOW:
            return {
                ...state,
                fridgeModalShow: action.fridgeModalShow.show,
                fridgeModalKind: action.fridgeModalShow.kind
            };
        default:
            return state;
    }
}

export default modal;