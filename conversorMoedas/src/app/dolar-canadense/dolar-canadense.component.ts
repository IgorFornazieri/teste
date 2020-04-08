import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dolar-canadense',
  templateUrl: './dolar-canadense.component.html',
  styleUrls: ['./dolar-canadense.component.css']
})
export class DolarCanadenseComponent implements OnInit {

  constructor() { }

  dolar:number = 3.72
  ress:any
  resultado:any
  formatado:any
  valor:any
  
  getDolarCnd(event){
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
