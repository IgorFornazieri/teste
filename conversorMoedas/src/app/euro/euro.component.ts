import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css']
})
export class EuroComponent implements OnInit {

  constructor() { }

  dolar:number = 5.67
  ress:any
  resultado:any
  formatado:any
  valor:any
  
  getEuro(event){
    this.valor = event.target.value
    this.ress = this.dolar * this.valor
    
  }

  getReal(event){
    this.valor = event.target.value
    this.resultado = this.valor / this.dolar
    this.resultado = this.resultado.toFixed(2)
  }



  ngOnInit(): void {
  }

}
