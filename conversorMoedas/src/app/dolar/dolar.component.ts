import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../conversor.service';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {

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
      this.getCurrency("USD")
    }

  getDolar(event){
    let valor = event.target.value
    this.ress = this.dolar * valor
    console.log(this.ress)
    }
  
  getReal(event){
    this.valor = event.target.value
    this.resultado = this.valor / this.dolar
    }

    

}
