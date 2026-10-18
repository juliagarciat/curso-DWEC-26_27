// En la linea "antes" = Teclado mecánico
// En la linea "después" = Raton inalámbrico

// Pregunta 1 · ¿Qué devuelve cheapestAvailable([])? ¿Por qué?
// Respuesta: devuelve undefined porque esta programado para que si no encuentra ningun producto devuelva undefined para que no explote la aplicacion
//
// Pregunta 2 · ¿Qué salió en «antes» y en «después»?
// antes: Teclado mecánico
// después: Ratón Inalámbrico
//
// Pregunta 3 · ¿Qué le ha hecho sort al array products original?
// Respuesta: 
//
// Pregunta 4 · En una aplicación donde varias partes usan products, ¿por qué es un problema?
// Respuesta: ...
//
// // Pregunta 1 · ¿Qué devuelve cheapestAvailable([])? ¿Por qué?
// Respuesta: Devuelve undefined porque el array recibido está vacío, por lo que no hay elementos que ordenar

// Pregunta 2 · ¿Qué salió en «antes» y en «después»?
// antes: Teclado mecánico
// después: Raton inalámbrico
//
// Pregunta 3 · ¿Qué le ha hecho sort al array products original?
// Respuesta: El método sort ha mutado el array original reordenando sus elementos de menor a mayor precio.

// Pregunta 4 · En una aplicación donde varias partes usan products, ¿por qué es un problema?
// Respuesta: Porque produce efectos secundarios no deseados. Si otro módulo o componente de la aplicación depende del orden original de products, sus datos habrán cambiado de forma imprevista, pudiendo causar errores difíciles de rastrear. Usar toSorted() evita esto devolviendo un nuevo array ordenado sin alterar el original.
