// it only creates action, so it's called action creator
// it has to have a type property
export function createCourse(course) {
  return { type: 'CREATE_COURSE', course }; // course: course (we can ommit when the two sides are equal - es2015)
}
