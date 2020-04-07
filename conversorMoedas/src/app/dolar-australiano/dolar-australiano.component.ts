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
  formatado:any

  getDolarAus(event){
    let valor = event.target.value
    this.ress = this.dolar * valor
    this.formatado = this.ress.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
}