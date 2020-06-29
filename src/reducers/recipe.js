import { SET_RECIPE_SEARCH, ADD_RECIPE_LIST } from '../actions/ActionTypes'

const initialState = {
    recipeSearch: '',
    recipeList: []
};

function recipe(state = initialState, action) {
    switch (action.type) {
        case SET_RECIPE_SEARCH:
            return { ...state, recipeSearch: action.recipeSearch };
        case ADD_RECIPE_LIST:
            return { ...state, recipeList: action.recipeList };
        default:
            return state;
    }
}

export default recipe;