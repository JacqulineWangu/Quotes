import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, '“Code is like humor. When you have to explain it, it’s bad.”', 'By Sierra', 'Jacquline', new Date(2012, 5, 12)),
    new Quote(2, '“I am deliberate and afraid of nothing.”', 'By Mercy','Jacquline', new Date(2016, 6, 10)),
    new Quote(3, '“We have a strategic plan. It’s called doing things.”', 'By Hilton','Jacquline', new Date(2008, 0, 12)),
    new Quote(4, '“You can’t use up creativity. The more you use, the more you have.”', 'By Raymond','Jacquline', new Date(2014, 8, 12)),
    new Quote(5, '“Experience is the name everyone gives to their mistakes.”', 'By Benedict', 'Jacquline', new Date(2017, 12, 12)),
    new Quote(6, '“Knowledge is power.”', 'Benson Kimani','Jacquline', new Date(2011, 2, 12)),
    new Quote(7, '“Fix the cause, not the symptom.”', 'By Jacquline','Jacquline', new Date(2016, 9, 12)),


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