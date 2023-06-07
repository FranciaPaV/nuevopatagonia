import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-formularioreserva',
  templateUrl: './formularioreserva.component.html',
  styleUrls: ['./formularioreserva.component.css']
})
export class FormularioreservaComponent {

  public datosformulario: any[] = []
  public formulario = new FormGroup({
    nombreCliente: new FormControl('', [Validators.required]),
    apellidoCliente: new FormControl('', [Validators.required]),
    telefonoCliente: new FormControl('', [Validators.required]),
    fechaInicioReserva: new FormControl('', [Validators.required]),
    fechaFinalReserva: new FormControl('', [Validators.required]),
    numeroPersonas: new FormControl('', [Validators.required]),
    nombreHabitacion: new FormControl('', [Validators.required]),
    idHabitacion: new FormControl('', [Validators.required]),
    costo: new FormControl(''),
  });

  

  public constructor (public constructorFormulario: FormBuilder, public servicio: ReservasService) {
  }

  public procesarDatos():void{
    if (this.formulario.invalid) {
      return;
    }

    const datos = this.formulario.value;
    this.servicio.registrarReserva(datos)
    .subscribe((respuesta) => {
      console.log(respuesta);
    })
  }

}
