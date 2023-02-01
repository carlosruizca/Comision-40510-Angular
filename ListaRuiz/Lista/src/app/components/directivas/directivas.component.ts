import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
    variableEst: number = 5;
    estudianteActual: Estudiante = {
      nombre: 'Juan',
      edad: 22,
      activo: true
    };
    listaEstudiantes: Array <Estudiante> = [
      {
        nombre: 'Carlos',
        edad: 31,
        activo: true
      },
      {
        nombre: 'Eduardo',
        edad: 18,
        activo: true
      },
      {
        nombre: 'Maria',
        edad: 31,
        activo: false
      },
      {
        nombre: 'Jose',
        edad: 56,
        activo: false
      },
      {
        nombre: 'Miguel',
        edad: 28,
        activo: true
      },
      {
        nombre: 'Daniela',
        edad: 22,
        activo: false
      },
      {
        nombre: 'Leonardo',
        edad: 25,
        activo: false 
      },
    ];
}
