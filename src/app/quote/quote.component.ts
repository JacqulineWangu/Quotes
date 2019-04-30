import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Treat me like a joke and I will leave you like it is funny', 'By Chelsea Lydia','Denzel Ouma', new Date(2019, 0, 12)),
    new Quote(2, 'I am not wierd I am limited edition', 'By Abby','Denzel Ouma', new Date(2019, 0, 10)),
    new Quote(3, 'Get up, stand up, Stand up for your rights. Get up, stand up, Don not give up the fight','Denzel Ouma', 'By Bob Marley', new Date(2019, 0, 12)),
    new Quote(4, 'Talk is cheap. Show me code', 'By June Barasa','Denzel Ouma', new Date(2019, 0, 12)),
    new Quote(5, 'Things are not always #000000 and #FFFFFF', 'By Yommie Samora','Denzel Ouma', new Date(2019, 0, 12)),
    new Quote(6, 'Eat Sleep Game Repeat', 'Benson Kimani','Denzel Ouma', new Date(2019, 0, 12)),
    new Quote(7, 'Gamers do not die they respawn', 'By Denzel Ouma','Denzel Ouma', new Date(2019, 0, 12)),


  ]

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }
  ngOnInit() {
  }

}