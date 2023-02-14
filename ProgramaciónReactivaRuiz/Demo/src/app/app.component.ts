import { Component } from '@angular/core';
import { Curso } from './models/curso';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';

  constructor(
    private cursoService: CursoService
  ){}

  agregarCurso(){
    let c: Curso = {
      nombre: 'Python',
      comision: '53455',
      fechaInicio: new Date (2023, 5, 1),
      fechaFin: new Date (2023, 8, 1),
      profesor: {
        nombre: 'Rodrigo',
        correo: 'Rodrigo@coderhouse.com',
        fechaRegistro: new Date()
      },
      inscripcionAbierta: true,
    };
    this.cursoService.agregarCursos(c);
  }
}
