const phones = new Map<string, string>();

phones.set("Ana", "626048925");
phones.set("Fernando", "678902345");
phones.set("Maria", "678231694");
phones.set("Carlos", "655082178");

console.log(phones.size); // 4
console.log(phones.get("Maria")); // 678231694
console.log(phones.get("Nombre")) // <--- undefined (hay que validar si el dato existe)

// notas de una clase

const grades = new Map<string, number>([
  ["Ana", 9],
  ["Juan", 5],
  ["Andrés", 4],
]);


/**
 *  Funcion para añadir usuarios al map de grades
 * @param name : string Es el nombre del usuario
 * @param grade : number Es la nota del alumno
 * @returns Devuelve true o false dependiendo de si esta la nota o no
 */
// funcion para añadir usuarios al map
export function addGrade(name: string, grade: number): boolean {
  grades.set(name, grade);
  return grades.has(name);
}
/*
 * function addGrade(name: string, grade: number): Map<string,number> {
 *  return grades.has(name) ? grades : grades.set(name,grade);
* } */


/**
 *  Funcion para obtener la nota del alumno especificado siempre que exista
 * @param name : string Nombre del alumno cuya nota queremos saber
 * @returns Descripción
 */
// funcion para obtener la nota de un alumno siempre y cuando exista
export function gradesOf(name: string): string {
  const grade = grades.get(name);
  return grade ? `Nota: ${grade}` : "No tiene nota";
}


// ----------- Contabilizar los votos -------------- 
/**
 *  Funcion que devuelve los votos 
 * @param votes Descripción
 */
export function countVotes(votes: string[]): Map<string, number> {
  const count = new Map<string, number>();
  for (const vote of votes) {
    // sacar el numero de votos que tiene vote
    const previus = count.get(vote) ?? 0;
    count.set(vote, previus + 1);
  }
  return count;
}





// agrupar alumnos por clase. Tengo una lista de alumnos y cada uno es de un grupo: 2DWEC-A o 2DWEC-B
// construir un namesGroup que devuelva cada grupo con sus alumnos respectivos.

export interface Student {
  name: string;
  group: string;
}


const students: Student[] = [
  { name: "Ana", group: "2A" },
  { name: "Juan", group: "2B" },
  { name: "Antonio", group: "2B" },
  { name: "Maria", group: "2B" },
  { name: "Pepe", group: "2A" },
]

export function namesGroup(students: Student[]): Map<string, string[]> {
  const groups = new Map<string, string[]>();
  for (const student of students) {
    const currrent = groups.get(student.group) ?? []
    groups.set(student.group, [...currrent, student.name])
  }
  return groups;
}

for (const [group, name] of namesGroup(students)) {
  console.log(`Group: ${group} Estudiante: ${name}`)
}

//closures DOM





