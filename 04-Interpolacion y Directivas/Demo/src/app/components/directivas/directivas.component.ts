import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  subtitulo: string = "Esto es un ejemplo de interpolación mediante {{ }}";
  variable1: number = 5;
  estudianteActual: Estudiante = {
    nombre: 'Juan',
    edad: 22,
    activo : true
  };
  listaEstudiantes: Array <Estudiante> = [
    {
      nombre: 'Nelson',
      edad: 22,
      activo : true
    },
    {
      nombre: 'Carlos',
      edad: 31,
      activo : true
    },
    {
      nombre: 'Maria',
      edad: 31,
      activo : false
    },
  ];
}
