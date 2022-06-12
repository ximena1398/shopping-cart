export const agregarCaracter = (cadena, caracter, pasos) => {
    cadena = cadena + ""
    let cadenaConCaracteres = "";
    const longitudCadena = cadena.length;
    for (let i = longitudCadena; i >= 0; i -= pasos) {
        cadenaConCaracteres = caracter + cadena.substring(i - 3, i) + cadenaConCaracteres
    }
    cadenaConCaracteres = cadenaConCaracteres.substring(1)
    return cadenaConCaracteres;
}