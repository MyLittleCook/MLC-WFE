import { ADD_RECIPE_LIST } from '../actions/ActionsType'

const initialState = {
    recipeList: []
};

function recipeList(state = initialState, action) {
    switch (action.type) {
        case ADD_RECIPE_LIST:
            return { ...state, recipeList: action.data };
        default:
            return state;
    }
}

export default recipeList;