import { combineReducers } from 'redux';
import { photoReducer } from './photoReducer';



const rootReducer = combineReducers({
    photoState: photoReducer,
});

export default rootReducer;
