import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-formularioreserva',
  templateUrl: './formularioreserva.component.html',
  styleUrls: ['./formularioreserva.component.css']
})
export class FormularioreservaComponent {

  public formulario: FormGroup;
  public datosformulario: any[]=[]

  public constructor (public constructorFormulario: FormBuilder ,public servicio: ReservasService){
    this.formulario = this.inicializarFormulario()
  }

  public inicializarFormulario():FormGroup {
    return this.constructorFormulario.group ({
      nombreCliente:[''],
      apellidoCliente:[''],
      telefonoCliente:[''],
      fechaInicioReserva:[''],
      fechaFinalReserva:[''],
      numeroPersonas:[''],
      nombreHabitacion:[''],
      idHabitacion:[''],
      costo:['']
    })
  }

  public procesarDatos():void{
    
    let datos=this.formulario.value
    
    this.servicio.registrarReserva(datos)
    .subscribe((respuesta)=>{
      console.log(respuesta)
    })
  }
}

