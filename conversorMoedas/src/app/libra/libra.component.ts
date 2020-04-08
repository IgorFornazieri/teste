import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libra',
  templateUrl: './libra.component.html',
  styleUrls: ['./libra.component.css']
})
export class LibraComponent implements OnInit {

  constructor() { }

  dolar:number = 6.43
  ress:any
  resultado:any
  formatado:any
  valor:any
  
  getLibra(event){
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
