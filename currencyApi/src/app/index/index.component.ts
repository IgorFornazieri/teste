import { Component, OnInit, ViewChild} from '@angular/core';
/* import {MatSidenav} from '@angular/material/sidenav'; */
import { ConversorService } from '../conversor.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  dolar:any
  dolarA:any
  dolarC:any
  dolarE:any
  dolarL:any
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

    getCurrency1(main){
      this.currency.getValue(main).subscribe((data) =>{
         this.coin = new Object(data)
        this.dolarA = this.coin.rates.BRL
        console.log(this.coin.rates.BRL)
      })
    }

    getCurrency2(main){
      this.currency.getValue(main).subscribe((data) =>{
         this.coin = new Object(data)
        this.dolarC = this.coin.rates.BRL
        console.log(this.coin.rates.BRL)
      })
    }

    getCurrency3(main){
      this.currency.getValue(main).subscribe((data) =>{
         this.coin = new Object(data)
        this.dolarE = this.coin.rates.BRL
        console.log(this.coin.rates.BRL)
      })
    }

    getCurrency4(main){
      this.currency.getValue(main).subscribe((data) =>{
         this.coin = new Object(data)
        this.dolarL = this.coin.rates.BRL
        console.log(this.coin.rates.BRL)
      })
    }

    ngOnInit():void {
      this.getCurrency("USD")
      this.getCurrency1("AUD")
      this.getCurrency2("CAD")
      this.getCurrency3("EUR")
      this.getCurrency4("GBP")
      }
  
}

