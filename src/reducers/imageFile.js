import { SET_RECIPE_IMAGE_FILE, SET_STEP_IMAGE_FILE } from '../actions/ActionTypes';

const initialState = {
    recipeImageFile: null,
    stepImageFile: []
};

function imageFile(state = initialState, action) {
    switch (action.type) {
        case SET_RECIPE_IMAGE_FILE:
            return { ...state, recipeImageFile: action.recipeImageFile };
        case SET_STEP_IMAGE_FILE:
            return { ...state, stepImageFile: [...state.stepImageFile, action.stepImageFile] };
        default:
            return state;
    }
}

export default imageFile;