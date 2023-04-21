import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
// utilisation de la déclaration/initialisation par un objet
  user: User = {
    title: 'Doe John',
    age: 25,
    quote: 'Citation',
    picture: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };
//utilisation du contructeur de la classe User
  user2: User = new User('https://fr.web.img4.acsta.net/pictures/22/03/11/09/37/3327872.jpg', 'Butcher', 45, "j'ai pas d'idée");


  showAge = false;

  hideAge(): void {
    this.showAge = !this.showAge;
  }
}
