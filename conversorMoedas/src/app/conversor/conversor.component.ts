import { Component, OnInit, getModuleFactory } from '@angular/core';
import { R3TargetBinder } from '@angular/compiler';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  
  dolar:number = 5.25
  ress:any

  getDolar(event){
    let valor = Number(event.target.value)
    this.ress = this.dolar * valor
  }

  // clickFunction(event){
  //   console.log(event)
  //   document.getElementById("dolar")[0].placeholder = "Real"
  //   console.log(document.getElementById('dolar')[0].placeholder = "Real")
    
  // }
}
