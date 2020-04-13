import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private baseUrl = 'https://api.exchangeratesapi.io/latest?base='

  constructor(private http: HttpClient) { }
    
  getValue(data){
      let apiConversor = this.baseUrl + data
      return this.http.get(apiConversor)
    }
    
  }

  