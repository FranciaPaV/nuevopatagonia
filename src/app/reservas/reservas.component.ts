import { Component } from '@angular/core';
import { ReservasService } from '../services/reservas.service';
import { Reserva } from '../interfaces/Reserva';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  public reservas: Reserva [] =[]

    public constructor(public servicios: ReservasService) {
      this.servicios.buscarReservas().subscribe((respuesta) => {
        this.reservas = respuesta.reservas
      })
    }

}
