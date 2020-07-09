import { combineReducers } from 'redux';

import recipe from './recipe';
import share from './share';

export default combineReducers({
    recipe,
    share
})