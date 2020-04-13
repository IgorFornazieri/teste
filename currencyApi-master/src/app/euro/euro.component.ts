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
  coin:any
  

   constructor(private currency: ConversorService) { }

    getCurrency(main){
      this.currency.getValue(main).subscribe((data) =>{
         this.coin = new Object(data)
        this.dolar = this.coin.rates.BRL
        console.log(this.coin.rates.BRL)
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
