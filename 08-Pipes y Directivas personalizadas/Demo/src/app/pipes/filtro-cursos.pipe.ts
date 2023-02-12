import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../modules/curso'

@Pipe({
  name: 'filtroCursos'
})
export class FiltroCursosPipe implements PipeTransform {

  transform(cursos: Curso[], filtro: string): Curso [] {
    return cursos.filter((c) => {
      return c.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
    })
  }

}
