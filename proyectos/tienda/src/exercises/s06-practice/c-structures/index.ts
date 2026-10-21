/*1. Los mensajes de un grupo de WhatsApp, en el orden en que llegaron.
·Estructura a usar : Array 
·Motivo: Usaria un array porque en el se irian guardando los mensajes en el orden de llegada

2. Los usuarios que ya han visto una historia de Instagram.
·Estructura : Set
·Motivo: Usaria un Set porque este no almacena ningun elemento repetido por tanto si alguien ve la historia 3 veces el Set
solo guarda la primera vez

3. Cuántos pasos ha dado cada día de la semana un reloj deportivo.
·Estructura : Map<number, number>
·Motivo: Usaria un Map porque asi se irian guardando la clave (el dia) junto con su valor (los pasos)

4. Los datos de una película: título, año y duración.
·Estructura : Object
·Motivo: Usaria object porque necesitamos representar una entidad con atributos, en este caso titulo, año y duracion

5. Las provincias distintas de donde son los alumnos de la clase.
·Estructura : Set
·Motivo: Usaria un Set porque de esta manera aunque existan 3 alumnos de Granada, el nombre de la provincia solo se guardaria una vez

6. Para cada asignatura, la lista de exámenes.
·Estructura : Map<string, string[]>
·Motivo: Usaria un Map porque asi se puede guardar la asignatura(la clave) junto con su lista de examenes (valor)

7. Los números que ya han salido en el bingo.
·Estructura : Array
·Motivo: Usaria un Array porque este iria almacenando los numeros por orden de salida y como estamos hablando de un bingo no seria necesario
usar un set para evitar repetidos porque no hay

8. Para cada código postal, el nombre de su localidad.
·Estructura : Map<string, string>
·Motivo: Usaria un Map porque asi podemos guardar el codigo postal (clave) en un string para evitar que el CP se altere junto a la localidad a la que le corresponde (valor)
*/
