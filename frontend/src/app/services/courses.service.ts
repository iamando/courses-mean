import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  API_URI = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get(`${this.API_URI}/courses`);
  }

  getCourse(id: string) {
    return this.http.get(`${this.API_URI}/courses/${id}`);
  }
}
