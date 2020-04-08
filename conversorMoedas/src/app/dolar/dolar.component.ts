import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {

  constructor() { }


  dolar:number = 5.21
  ress:any
  resultado:any
  formatado:any
  valor:any

  getDolar(event){
    let valor = event.target.value
    this.ress = this.dolar * valor
    this.formatado = this.ress.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  
  getReal(event){
    this.valor = event.target.value
    this.resultado = this.valor / this.dolar
    }


  ngOnInit(): void {
  }

}
