import { Component } from '@angular/core';
import { Quotes } from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
      new Quotes(1,'watch','kill',new Date()),
      new Quotes(2,'eat lunch','manace',new Date())
    ];
}