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
    { nombre: 'Testing QA Manual', comision: '32030', profesor: 'fede' },
    { nombre: 'Desarrollo Web', comision: '44075', profesor: 'lucia' },
    { nombre: 'JavaScript', comision: '44555', profesor: 'carola' },
    { nombre: 'Angular', comision: '49533', profesor: 'abner' },
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  columnas: string[] = ['nombre', 'comision', 'profesor', 'acciones']

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
