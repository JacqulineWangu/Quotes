import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
   quotes = 'Instead';

   constructor(){

    this.quotes = [" Instead of always indulging in your desires, you need limits on those desires to be truly happy.","Appreciating the simpler things is a quicker route to happiness."];
  }
}
