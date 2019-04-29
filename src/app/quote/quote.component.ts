import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-Quotes',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
      new Quotes(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2018,6,4)),
      new Quotes(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2022,4,6)),
      new Quotes(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,4,6)),
      new Quotes(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2022,4,6)),
      new Quotes(5, 'Solve math homework','Damn Math',new Date(2022,4,6)),
      new Quotes(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date(2022,4,6)),
  ]

  completeQuote(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

constructor() { }
ngOnInit() {
}

}