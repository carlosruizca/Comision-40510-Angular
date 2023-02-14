import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoAlphaService {
      private cursos: Curso[] = [
      { nombre: 'Testing QA Manual-Alpha', 
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
      { nombre: 'Desarrollo Web-Alpha', 
      comision: '44075', 
      profesor: {
        nombre: 'Lucia',
        correo: 'lucia@coderhouse.com',
        fechaRegistro: new Date(2020, 1, 1)
      },
      fechaInicio: new Date(2023, 4, 1, 20, 30, 0),
      fechaFin: new Date(2023, 6, 1),
      inscripcionAbierta: true
      },];
  
    constructor() { }
  
    obtenerCursos():Array<Curso>{
      return this.cursos;
    }
  
    agregarCursos(curso: Curso){
      curso.nombre = 'Angular (Prueba Curso Service)';
      this.cursos.push(curso);
    }
  }

