import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

// reducers
import { State } from '../../app.store';
// Actions
import { GetCourse } from '../../ngrx/actions/course.actions';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  faCartPlus = faCartPlus;
  courseId: string;
  course: any = {};
  loading: boolean;
  course$ = this.store
    .select((state) => state.course)
    .subscribe(
      (res) => {
        this.course = res.course;
        this.loading = res.loading;
      },
      (err) => console.error(err)
    );

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCourseById();
  }

  getCourseById(): void {
    this.route.params.subscribe((params) => {
      this.store.dispatch(new GetCourse(params.id));
    });
  }

  handleAddToCart(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params.id;
      this.router.navigate(['/cart/', this.courseId]);
    });
  }
}
