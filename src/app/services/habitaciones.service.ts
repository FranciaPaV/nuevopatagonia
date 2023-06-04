import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';  //porq estamos programando del lado del cliente httpclient
import {Observable} from 'rxjs';  //es como una promesa observa de forma asincrona que el servidor me responda y apenas me respónda me envia la informacion

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  public url:string = 'https://servidorviernes2605.vercel.app/'  

  constructor(public servicioHabitacion: HttpClient) { }  //le decimos al servicio que va a ser un cliente de http


  //metodos que retornan un observable
  public buscarHabitaciones():Observable<any>{
    let urlservicio:string = this.url+"buscarhabitaciones"  
    return this.servicioHabitacion.get(urlservicio)
  }

  public registrarhabitacion(datos:any):Observable<any>{
    let urlservicio:string = this.url+"registrarhabitacion"
    return this.servicioHabitacion.post(urlservicio, datos)
  }



  public buscarHabitacion(){}
  public crearHabitacion(){}
  public editarHabitacion(){}

  
}
