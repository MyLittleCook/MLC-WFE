import { SET_RECIPE_SEARCH, SET_RECIPE_CATEGORY } from '../actions/ActionTypes'

const initialState = {
    recipeSearch: '',
    recipeCategory: 'ALL'
};

function recipe(state = initialState, action) {
    switch (action.type) {
        case SET_RECIPE_SEARCH:
            return { ...state, recipeSearch: action.recipeSearch, recipeCategory: '' };
        case SET_RECIPE_CATEGORY:
            return { ...state, recipeCategory: action.recipeCategory, recipeSearch: '' };
        default:
            return state;
    }
}

export default recipe;