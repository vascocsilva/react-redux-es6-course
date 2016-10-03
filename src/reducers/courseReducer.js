import * as types from '../actions/actionTypes';

// receives an action and a state
// because what it all does is take an action, change the state, and return the new state
export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
