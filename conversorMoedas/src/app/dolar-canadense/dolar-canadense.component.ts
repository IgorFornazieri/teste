import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../conversor.service';

@Component({
  selector: 'app-dolar-canadense',
  templateUrl: './dolar-canadense.component.html',
  styleUrls: ['./dolar-canadense.component.css']
})
export class DolarCanadenseComponent implements OnInit {

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
      this.getCurrency("CAD")
    }
  
  getDolarCnd(event){
    let valor = event.target.value
    this.ress = this.dolar * valor
  }
  
  getReal(event){
    this.valor = event.target.value
    this.resultado = this.valor / this.dolar
    }

  

}
