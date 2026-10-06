//crear  una funcion que se le pase como parametro un texti y que lo encripte
//crear una funcion a la que se le pase una cadena encriptada la desencripte
//nota: buscar alguna libreria que permita generar cadenas encriptadas de forma segura
//@autor: julia GT
/*Investigacion:La libreria que he elegido es CryptoJs.
 * He escogido esta porque es una libreria bastante conocida, por lo que hay bastante documentacion,
 * es sencilla de usar y la sintaxis es mu limpia*/

//Version profesional
import CryptoJS from "crypto-js"
const clave:string = "clavesecreta"

/*
 * Recibe: texto
 * Devuelve: texto_cifrado
 */
function encriptar (texto:string) {
  textoEncriptado: xxxx = CryptoJS.AES.encrypt(texto,clave).toString()
  return textoEncriptado
}


function desencriptar
