import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  age: number = 42;
  firstName: string = "Imothep";
  choiceArray: boolean[]= [true, false, true, false, false];
}
