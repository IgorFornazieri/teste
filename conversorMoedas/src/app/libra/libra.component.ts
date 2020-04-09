import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../conversor.service';

@Component({
  selector: 'app-libra',
  templateUrl: './libra.component.html',
  styleUrls: ['./libra.component.css']
})
export class LibraComponent implements OnInit {

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
      this.getCurrency("GBP")
    }
  
  getLibra(event){
    let valor = event.target.value
    this.ress = this.dolar * valor
    this.formatado = this.ress.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  getReal(event){
    this.valor = event.target.value
    this.resultado = this.valor / this.dolar
    
    }


}
