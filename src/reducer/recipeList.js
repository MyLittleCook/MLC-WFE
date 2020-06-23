import { ADD_RECIPE_LIST } from '../actions/ActionsType'

const defaultState = {
    recipeList: []
};

function recipeList(state = defaultState, action) {
    switch (action.type) {
        case ADD_RECIPE_LIST:
            return { ...state, recipeList: action.recipeList };
        default:
            return state;
    }
}

exports default recipeList;