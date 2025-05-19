import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../models/appointement';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{

  newAppointmentTitle: string = ""
  newAppointmentDate: Date = new Date()

  appointments: Appointment[] = []

  ngOnInit(): void {
    let itens = localStorage.getItem("appointments")
    this.appointments = itens ? JSON.parse(itens) : []
  }

  addAppointment(){
    if(this.newAppointmentDate && this.newAppointmentTitle.trim().length){
      let newAppoint: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppoint)

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date()

      localStorage.setItem("appointments",JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index: number){
    this.appointments.splice(index)
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }
}
