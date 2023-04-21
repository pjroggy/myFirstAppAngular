import { Component } from '@angular/core';

@Component({
  selector: 'app-abon-dysney',
  templateUrl: './abon-dysney.component.html',
  styleUrls: ['./abon-dysney.component.css']
})
export class AbonDysneyComponent {

  isPremium: boolean = false;

  seriesWatched: string[] = ["The Boys", "The expanse", "The Mandalorian", "Babar", "Captain tsubasa"];

  hidePremium(): void {
    this.isPremium = !this.isPremium;
    if (this.isPremium === true) {

    }
  }

}
