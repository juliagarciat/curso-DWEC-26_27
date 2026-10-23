import type { Student } from "../types/student";

// crear una funcion que obtenga la media de la nota de los estudiantes
/**
 *  Funcion que obtiene la media de todos los estudiantes
 * @param list : Student[] La lista de estudiantes que se pasa como parametro
 * @returns Descripción: Devuelve la nota media de toda la clase, 0 si no hay nadie
 */
export function average(list: readonly Student[]): number {
  /*if (list.length === 0) return 0*/
  const suma = list.reduce((acc, student) => acc + student.grade, 0)
  /*for (const alumno of list){
    suma += alumno.grade
  }*/
  //return (list.reduce((acc, student) => acc + student.grade, 0)) / list.length
  return list.length ? suma / list.length : 0
  //return list.length ? (list.reduce((acc, student) => acc + student.grade, 0)) / list.length : 0

}



// crear funcion que compruebe si el alumno a aprobado
/**
 *  Una funcion que comprueba si el alumno esta aprobado
 * @param student : Student El estudiante que se pasa como parametro
 * @returns Devuelve : boolean dependiendo de si el alumno esta aprobado o no
 */
export function isPassed(student: Student): boolean {
  return student.grade >= 5
}



// crear funcion que devuelva los alumnos que han aprobado
/**
 *  Funcion que devuelve una lista con los alumnos aprobados
 * @param list : Student[] La lista de estudiantes que se le pasa como parametro
 * @returns Una lista con los alumnos aprobados
 */
export function passedStudents(list: Student[]): Student[] {
  //return list.filter(a => a.grade >= 5) 
  return list.filter(isPassed)
}

