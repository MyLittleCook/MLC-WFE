import * as types from './ActionTypes';

export const addRecipeList = (data) => ({
    type: types.ADD_RECIPE_LIST,
    recipeList: data
});