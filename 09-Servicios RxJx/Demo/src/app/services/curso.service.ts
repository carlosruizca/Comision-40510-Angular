import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [
    {nombre: 'Testing QA Manual', 
    comision: '32030', 
    profesor: {
      nombre: 'Fede',
      correo: 'fede@coderhouse.com',
      fechaRegistro: new Date(2020, 2, 15)
    },
    fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
    fechaFin: new Date(2023, 4, 1),
    inscripcionAbierta: false
  },
  { nombre: 'Desarrollo Web', 
  comision: '44075', 
  profesor: {
    nombre: 'Lucia',
    correo: 'lucia@coderhouse.com',
    fechaRegistro: new Date(2020, 1, 1)
  },
  fechaInicio: new Date(2023, 4, 1, 20, 30, 0),
  fechaFin: new Date(2023, 6, 1),
  inscripcionAbierta: true
  },
  { nombre: 'JavaScript', 
  comision: '44555', 
  profesor: {
    nombre: 'Carola',
    correo: 'carola@coderhouse.com',
    fechaRegistro: new Date(2021, 2, 15)
  },
  fechaInicio: new Date(2023, 6, 1, 20, 30, 0),
  fechaFin: new Date(2023, 9, 1),
  inscripcionAbierta: false
},
{ nombre: 'Angular', 
comision: '49533', 
profesor: {
  nombre: 'Abner',
  correo: 'abner@coderhouse.com',
  fechaRegistro: new Date(2021, 8, 1)
},
fechaInicio: new Date(2023, 9, 1, 20, 30, 0),
fechaFin: new Date(2024, 1, 1),
inscripcionAbierta: true
    }
  ];

  constructor() { }

  obtenerCursos(): Array<Curso>{
    return this.cursos;
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    console.log('Curso agregado', this.cursos);
  }
}