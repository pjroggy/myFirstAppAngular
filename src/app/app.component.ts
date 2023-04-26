import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'challengeInput';

  onomatopoeiaList: string[] = ["prout", "burp", "haaaaa", "oups"];

  onReceiveNewOnomatopia(newOnomatopia: string): void{
    this.onomatopoeiaList.push(newOnomatopia)
  }
}
