import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: string[] = ["potatoes", "cheese", "ham"];

  dontForget: boolean = true;
  constructor () {}
}
