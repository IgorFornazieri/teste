import { Component } from '@angular/core';
import { ConversorService } from './conversor.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Conversor de Moedas';

 constructor(private currency: ConversorService){}

  // ngOnInit():void {
  //   this.getCurrency("USD", "BRL")
  // }

  // getCurrency(coin, coin2){
  //     let valor 
  //     this.currency.getValue(coin).subscribe(
  //       (transform) => {
  //         valor = new Object(transform)
  //         console.log(valor)
  //         console.log(valor.rates[coin2])
  //         return valor
  //       }
  //     )
  //   }

}
