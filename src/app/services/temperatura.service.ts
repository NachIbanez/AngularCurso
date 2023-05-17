import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = 'cc38e5bd0ac3e8a6de205dba5a5cd5fb';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { }

  getEstadoTiempo(ciudad: string, codigo: string){
  
    const url = `${urlBase}?q=${ciudad},${codigo}&appid=${appId}`; // Concatenamos con TypeScript variables tipo string y cadenas de texto en una url 
  
    return this.http.get(url);
  }
}
