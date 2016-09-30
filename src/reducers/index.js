import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses // es2015 shorthand property name
});

export default rootReducer;
