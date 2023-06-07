export interface Reserva{
    nombreCliente: string;
    apellidoCliente: string;
    telefonoCliente: string;
    fechaInicioReserva: Date;
    fechaFinalReserva: Date;
    numeroPersonas: number;
    nombreHabitacion: string;
    idHabitacion: string;
    costo?:number
}