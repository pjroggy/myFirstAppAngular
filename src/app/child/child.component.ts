import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input()
    ageChild: number = 0;

    @Input()
    firstNameChild: string = "";

    @Input()
    choiceArray: boolean[] = [];
}
