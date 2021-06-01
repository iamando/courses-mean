import { Action } from '@ngrx/store';

// All Courses Actions
export enum CoursesActionTypes {
  GetCourses = 'Get Courses',
  GetCoursesSuccess = 'Get Courses Success',
  GetCoursesError = 'Get Courses Error',
}

export class CoursesAction implements Action {
  type: string;
  payload?: any;
}

export class GetCourses implements Action {
  public readonly type = CoursesActionTypes.GetCourses;
}

export class GetCoursesSuccess implements Action {
  public readonly type = CoursesActionTypes.GetCoursesSuccess;
  constructor(public payload: any) {}
}

export class GetCoursesError implements Action {
  public readonly type = CoursesActionTypes.GetCoursesError;
  constructor(public payload: any) {}
}

export type CoursesActions = GetCourses | GetCoursesSuccess | GetCoursesError;

// One Course Actions
export enum CourseActionTypes {
  GetCourse = 'Get One Courses',
  GetCourseSuccess = 'Get One Course Success',
  GetCourseError = 'Get One Course Error',
}

export class CourseAction implements Action {
  type: string;
  payload?: any;
}

export class GetCourse implements Action {
  public readonly type = CourseActionTypes.GetCourse;
  constructor(public payload: any) {}
}

export class GetCourseSuccess implements Action {
  public readonly type = CourseActionTypes.GetCourseSuccess;
  constructor(public payload: any) {}
}

export class GetCourseError implements Action {
  public readonly type = CourseActionTypes.GetCourseError;
  constructor(public payload: any) {}
}

export type CourseActions = GetCourse | GetCourseSuccess | GetCourseError;
