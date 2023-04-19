import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'apéro',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  showAge = false;
  
  hideAge(): void {
    this.showAge = !this.showAge;
  }
}
