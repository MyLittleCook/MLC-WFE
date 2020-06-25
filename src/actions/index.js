// import * as types from './ActionTypes';
export const ADD_RECIPE_LIST = 'ADD_RECIPE_LIST';


export const addRecipeList = (data) => ({
    type: ADD_RECIPE_LIST,
    recipeList: data
});