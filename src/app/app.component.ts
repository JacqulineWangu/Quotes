import { Component } from '@angular/core';
import {Quotes} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
  Quotes = [
      new Quote(1,'Appreciating the simpler things is a quicker route to happiness.'),
      new Quote(2,'Good things typically come from positivity.'),
      new Quote(3, 'Appreciating what you have helps you not think about the things you don’t have.'),
      new Quote(4, 'Live in the present. It’ll save you some heartache.'),
      new Quote(5, 'Life isn’t perfect so don’t act like it is. Just live.'),
      new Quote(6, 'Never let hate consume you.'),

  ]
}

