import { SET_RECIPE_SEARCH, SET_RECIPE_CATEGORY, SET_RECIPE_VIEW } from '../actions/ActionTypes'

const initialState = {
    recipeSearch: '',
    recipeCategory: 'ALL',
    recipeView: 'card'
};

function recipe(state = initialState, action) {
    switch (action.type) {
        case SET_RECIPE_SEARCH:
            return { ...state, recipeSearch: action.recipeSearch, recipeCategory: '' };
        case SET_RECIPE_CATEGORY:
            return { ...state, recipeCategory: action.recipeCategory, recipeSearch: '' };
        case SET_RECIPE_VIEW:
            return { ...state, recipeView: action.recipeView };
        default:
            return state;
    }
}

export default recipe;