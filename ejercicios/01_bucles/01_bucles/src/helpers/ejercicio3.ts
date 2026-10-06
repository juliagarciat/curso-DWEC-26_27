//Ejercicio uso de filtrar map y otros en TypeScript
// Crear programa me muestre el nombre de todos los alumnos
// Calcular la nota media de cada alumno
// Mostrar alumno con nota media mas alta
// Calcular la media global de la clase
//
//    {nombre: "Luis", edad: 22, notas: [5,4,6,3] }
//    {nombre: "Maria", edad: 20, notas: [8,6,9,3] }
//    {nombre: "Ana", edad: 24, notas: [4,4,,2,3] }
//    {nombre: "Antonio", edad: 21 notas: [8,2,6,3] }
//    {nombre: "Lucas", edad: 23, notas: [4,6,8,8] }
//    {nombre: "Sara", edad: 19, notas: [8,5,7,7] }

// para declarar tipos de objetos en typescript uso type y el objeto comienza siempre en mayusculas

// ---- declaracion de tipos ----

type Alumno = {
    nombre: string;
    edad: number;
    notas: number[];
}

// ---- declaracion de variables ----

const alumnado : Alumno[] = [
    {nombre: "Luis", edad: 22, notas: [5,4,6,3] },
    {nombre: "Maria", edad: 20, notas: [8,6,9,3] },
    {nombre: "Ana", edad: 24, notas: [4,4,,2,3] },
    {nombre: "Antonio", edad: 21 notas: [8,2,6,3] },
    {nombre: "Lucas", edad: 23, notas: [4,6,8,8] },
    {nombre: "Sara", edad: 19, notas: [8,5,7,7] }
]


// Obten los nombres (solo los nombres) de todos los alumnos

function obtenerNombres(alumnos : Alumno[]) {
return alumnos.map( (alumno) => alumno.nombre )
}

const obtenerNombreV2 = (alumnos: Alumno[]) => alumnos.map( (alumno) => alumno.nombre )
    
// ---- inizializar el ejercicio ----

 console.log(obtenerNombres(alumnado)) 
    