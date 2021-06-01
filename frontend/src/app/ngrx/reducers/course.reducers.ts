import {
  CoursesAction,
  CoursesActionTypes,
  CourseAction,
  CourseActionTypes,
} from '../actions/course.actions';

export interface CoursesState {
  courses: [];
  loading: boolean;
}

export interface CourseState {
  course: {};
  loading: boolean;
}

const initialCoursesState: CoursesState = {
  courses: [],
  loading: true,
};

const initialCourseState: CourseState = {
  course: {},
  loading: true,
};

export function coursesReducers(
  state: CoursesState = initialCoursesState,
  action: CoursesAction
): CoursesState {
  switch (action.type) {
    case CoursesActionTypes.GetCourses:
      return {
        ...state,
        loading: true,
      };

    case CoursesActionTypes.GetCoursesSuccess:
      return {
        ...state,
        loading: false,
        courses: action.payload.courses,
      };

    case CoursesActionTypes.GetCoursesError:
      return {
        ...state,
        loading: false,
        courses: [],
      };

    default:
      return state;
  }
}

export function courseReducers(
  state: CourseState = initialCourseState,
  action: CourseAction
): CourseState {
  switch (action.type) {
    case CourseActionTypes.GetCourse:
      return {
        ...state,
        loading: true,
      };

    case CourseActionTypes.GetCourseSuccess:
      return {
        ...state,
        loading: false,
        course: action.payload.course,
      };

    case CourseActionTypes.GetCourseError:
      return {
        ...state,
        loading: false,
        course: {},
      };

    default:
      return state;
  }
}
