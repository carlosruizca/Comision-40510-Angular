import { Estudiante } from './estudiante';
import { Persona } from './persona';
import { Curso } from './curso';
import { Inscripcion } from './inscripcion';

let persona1: Persona = new Persona("Carlos", "Ruiz", 31);
let estudiante1: Estudiante = new Estudiante("abner@gmail.com", "asd.123", persona1);
let inscripcion1: Inscripcion = {
    curso: new Curso(), 
    estudiante: estudiante1
}; 

console.log(estudiante1.saludar("Lucas"))