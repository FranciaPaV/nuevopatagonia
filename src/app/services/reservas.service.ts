import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  public url:string = 'https://servidorviernes2605.vercel.app/'

  constructor(public servicioReservas: HttpClient ) { }

  public buscarReservas (): Observable <any>{
    let urlservicio:string = this.url+"buscarReservas"
    return this.servicioReservas.get(urlservicio)
  }

  public registrarReserva(datos:any):Observable<any>{
    let urlservicio:string = this.url+"registrarReserva"
    return this.servicioReservas.post(urlservicio, datos)
  }

}
