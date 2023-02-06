import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../modules/curso'

@Pipe({
  name: 'filtroCursos'
})
export class FiltroCursosPipe implements PipeTransform {

  transform(cursos: Curso[], ...args: unknown[]): unknown {
    return cursos.filter((curso) => {
      curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
    })
  }

}
