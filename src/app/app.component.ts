import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-calculator';
  // currencies = ['Dollar', 'Euro', 'Yen', 'Ruble', 'Dirham'];
  currencies = [
    {value: 'Dollar', currencyValue: 0.013},
    {value: 'Euro', currencyValue: 0.012},
    {value: 'Yen', currencyValue: 1.72},
  ];

  amount:number = NaN;
  choice = '';

  result:number = NaN;
  finalResult = '';


  showResult = false;

  convert(){
    console.log(this.amount + this.choice);

    for(let currency of this.currencies){
        if(currency.value==this.choice){
          this.result = currency.currencyValue*this.amount;
        }
    }
    this.finalResult = this.amount+ " rupees equals "+this.result+" "+this.choice;
    this.showResult = true;
  }
}
