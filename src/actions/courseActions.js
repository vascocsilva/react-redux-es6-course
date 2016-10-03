import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
// it only creates action, so it's called action creator
// it has to have a type property
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses }; // courses: courses (shorthand, we can ommit when the two sides are equal - es2015)
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    })
  };
}
