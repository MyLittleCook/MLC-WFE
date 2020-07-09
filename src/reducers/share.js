import { SET_SHARE_RECIPE_DATA } from '../actions/ActionTypes'

const initialState = {
    shareRecipeData: {
        name: '',
        ingredients: [ 
            {
                name: '',
                detail: ''
            },
        ],
        category: '',
        recipeImage: '',
        steps: [
            {
                stepImage: '',
                content: '',
            },
        ]
    }
};

function share(state = initialState, action) {
    switch (action.type) {
        case SET_SHARE_RECIPE_DATA:
            return { ...state, shareRecipeData: action.shareRecipeData };
        default:
            return state;
    }
}

export default share;