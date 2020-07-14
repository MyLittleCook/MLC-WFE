import { combineReducers } from 'redux';

import signin from './signin';
import recipe from './recipe';
import share from './share';
import imageFile from './imageFile';
import modal from './modal';

export default combineReducers({
    signin,
    recipe,
    share,
    imageFile,
    modal
})