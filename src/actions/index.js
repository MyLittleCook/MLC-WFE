import * as types from './ActionTypes';

export const setIsSignIn = (bool) => ({
    type: types.SET_IS_SIGN_IN,
    isSignIn: bool
})

export const setNickName = (string) => ({
    type: types.SET_NICK_NAME,
    nickName: string
})

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

export const setRecipeImageFile = (img) => ({
    type: types.SET_RECIPE_IMAGE_FILE,
    recipeImageFile: img
})

export const setStepImageFile = (imgs) => ({
    type: types.SET_STEP_IMAGE_FILE,
    stepImageFile: imgs
})

export const setSignInUpModalShow = (bool) => ({
    type: types.SET_SIGNINUP_MODAL_SHOW,
    signInUpModalShow: bool
})