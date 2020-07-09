import * as types from './ActionTypes';

export const setRecipeSearch = (data) => ({
    type: types.SET_RECIPE_SEARCH,
    recipeSearch: data
});

export const addRecipeList = (data) => ({
    type: types.ADD_RECIPE_LIST,
    recipeList: data
});

export const setShareRecipeData = (data) => ({
    type: types.SET_SHARE_RECIPE_DATA,
    shareRecipeData: data
});