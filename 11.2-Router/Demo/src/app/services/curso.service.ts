import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
  ];private cursos$!: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursos$ = new BehaviorSubject(this.cursos);
    // this.cursos$ = new Observable<Curso[]>((suscriptor) => {
    //   suscriptor.next(this.cursos);

    //   setTimeout(()=>{
    //     let c: Curso = {
    //       nombre: 'Angular Avanzando - Desde el Observable',
    //       comision: '34022',
    //       fechaInicio: new Date(),
    //       fechaFin: new Date(),
    //       inscripcionAbierta: true,
    //       profesor: {
    //         nombre: 'Ulises',
    //         correo: 'ulises@gmail.com',
    //         fechaRegistro: new Date()
    //       }
    //     };
    //     this.cursos.push(c);
    //     suscriptor.next(this.cursos);
    //   }, 2000);
    // });
  }

  obtenerCursosPromise(): Promise<Curso[]>{
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
      }else{
        reject([]);
      }
    });
  }

  obtenerCursosObservable(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
    console.log('Curso agregado', this.cursos);
  }
}