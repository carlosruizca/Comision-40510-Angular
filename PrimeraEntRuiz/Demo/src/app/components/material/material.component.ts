import { Component } from '@angular/core';
import { Curso } from 'src/app/modules/curso'
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  cursos: Curso[] = [
    { nombre: 'Testing QA Manual', 
      comision: '32030', 
      profesor: {
        nombre: 'Fede',
        correo: 'fede@coderhouse.com',
        fechaIngreso: new Date(2020, 2, 15)
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 4, 1, 20, 30, 0),
      inscripcionAbierta: false
    },
    { nombre: 'Desarrollo Web', 
    comision: '44075', 
    profesor: {
      nombre: 'Lucia',
      correo: 'lucia@coderhouse.com',
      fechaIngreso: new Date(2020, 1, 1)
    },
    fechaInicio: new Date(2023, 4, 1, 20, 30, 0),
    fechaFin: new Date(2023, 6, 1, 20, 30, 0),
    inscripcionAbierta: true
    },
    { nombre: 'JavaScript', 
    comision: '44555', 
    profesor: {
      nombre: 'Carola',
      correo: 'carola@coderhouse.com',
      fechaIngreso: new Date(2021, 2, 15)
    },
    fechaInicio: new Date(2023, 6, 1, 20, 30, 0),
    fechaFin: new Date(2023, 9, 1, 20, 30, 0),
    inscripcionAbierta: false
  },
  { nombre: 'Angular', 
  comision: '49533', 
  profesor: {
    nombre: 'Abner',
    correo: 'abner@coderhouse.com',
    fechaIngreso: new Date(2021, 8, 1)
  },
  fechaInicio: new Date(2023, 9, 1, 20, 30, 0),
  fechaFin: new Date(2024, 1, 1, 20, 30, 0),
  inscripcionAbierta: true
},
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones']

  constructor(
    private dialog: MatDialog
  ){

  }

  abrirModal( curso:Curso ){
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
      data:curso
    });
  }
}
