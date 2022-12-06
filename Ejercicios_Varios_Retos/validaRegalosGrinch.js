// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

// Ejemplos:

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌

export default function isValid(letter) {
    // ¡No dejes que el Grinch gane!
let valida = true
    if(letter.includes("{") || letter.includes("}") || letter.includes("[") ||     letter.includes("]") || letter.includes("()"))  {
        valida = false
    }
    if(letter.includes("(") && !letter.includes(")")){
        valida = false
    }
    letter = letter.split(" ")

    if((letter.find(pal => pal[0] == ")" || pal[pal.length-1] =='(')))
    valida= false
    
    return valida
}