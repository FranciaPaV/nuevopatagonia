import { Component } from '@angular/core';
import { Reserva } from '../interfaces/Reserva';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  public bookings: Reserva[] =[]

    public constructor(public servicio: ReservasService) {
      this.servicio.buscarReservas ().subscribe((respuesta) => {
        this.bookings = respuesta.bookings
})
    }
  }