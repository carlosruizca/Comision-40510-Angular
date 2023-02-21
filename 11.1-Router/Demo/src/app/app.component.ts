import { Component } from '@angular/core';
import { filter, from, interval, map, mergeMap, of } from 'rxjs';
import { Curso } from './models/curso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos: Curso[] = [
    {nombre: 'Testing QA Manual', 
    comision: '32030', 
    profesor: 'fede',
    fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
    fechaFin: new Date(2023, 4, 1),
    inscripcionAbierta: false
  },
  { nombre: 'Desarrollo Web', 
  comision: '44075', 
  profesor: 'Lucia',
  fechaInicio: new Date(2023, 4, 1, 20, 30, 0),
  fechaFin: new Date(2023, 6, 1),
  inscripcionAbierta: true
  },
  { nombre: 'JavaScript', 
  comision: '44555', 
  profesor:'Carola',
  fechaInicio: new Date(2023, 6, 1, 20, 30, 0),
  fechaFin: new Date(2023, 9, 1),
  inscripcionAbierta: false
},
{ nombre: 'Angular', 
comision: '49533', 
profesor: 'Abner',
fechaInicio: new Date(2023, 9, 1, 20, 30, 0),
fechaFin: new Date(2024, 1, 1),
inscripcionAbierta: true
    }
  ];
  constructor(){
    of (this.cursos).pipe(
      map((cursos: Curso[]) => {
        return cursos.filter((curso: Curso) => curso.profesor === 'Lucia')
      })
    ).subscribe((cursos) => {
      console.log("Obtenido desde el OF, filtrado por nombre", cursos);
    })

    // of(this.cursos).pipe(
    //   mergeMap((cursos: Curso[]) => {
    //     return interval(1000).pipe(map((i => {
    //       return {
    //         nombre: `${cursos[i].nombre} - ${i}`,
    //         comision: cursos[i].comision,
    //         profesor: cursos[i].profesor
    //       }
    //     })));
    //   })
    // ).subscribe((datos) => console.log ('Utilizando mergeMap', datos));

    // from (this.cursos).subscribe((cursos) => {
    //   console.log("Obtenido desde el FROM", cursos);
    // })

    from (this.cursos).pipe(
      filter ((curso : Curso) => curso.comision === '44555')
    ).subscribe((curso : Curso) => console.log(curso))
    }
  }

