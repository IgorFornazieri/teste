import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dolar-australiano',
  templateUrl: './dolar-australiano.component.html',
  styleUrls: ['./dolar-australiano.component.css']
})
export class DolarAustralianoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dolar:number = 3.23
  ress:any
  resultado:any
  formatado:any
  valor:any

  getDolarAus(event){
    let valor = event.target.value
    this.ress = this.dolar * valor
    
}

getReal(event){
  this.valor = event.target.value
  this.resultado = this.valor / this.dolar
  }

}