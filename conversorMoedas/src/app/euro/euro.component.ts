import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../conversor.service';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css']
})
export class EuroComponent implements OnInit {

  dolar:any
  ress:any
  resultado:any
  formatado:any
  valor:any
  

   constructor(private currency: ConversorService) { }

    getCurrency(main){
      this.currency.getValue(main).subscribe((data) =>{
        let coin = new Object(data)
        this.dolar = coin.rates.BRL
        console.log(coin.rates.BRL)
      })
        
      
    }

    ngOnInit():void {
      this.getCurrency("EUR")
    }
  
  getEuro(event){
    this.valor = event.target.value
    this.ress = this.dolar * this.valor
    
  }

  getReal(event){
    this.valor = event.target.value
    this.resultado = this.valor / this.dolar
    }


}
