// Función para encriptar una palabra
function encriptar(palabra) {
    // Definimos las sustituciones
    const sustituciones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Aplicamos las sustituciones
    let palabraEncriptada = '';
    for (let letra of palabra) {
        if (letra in sustituciones) {
            palabraEncriptada += sustituciones[letra];
        } else {
            palabraEncriptada += letra;
        }
    }
    return palabraEncriptada;
}

// Función para desencriptar una palabra
function desencriptar(palabraEncriptada) {
    // Invertimos las sustituciones
    const sustitucionesInvertidas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Aplicamos las sustituciones invertidas
    let palabra = palabraEncriptada;
    for (let sustitucion in sustitucionesInvertidas) {
        let regex = new RegExp(sustitucion, 'g');
        palabra = palabra.replace(regex, sustitucionesInvertidas[sustitucion]);
    }
    return palabra;
}

// Ejemplo de uso
let palabraOriginal = 'gato';
let palabraEncriptada = encriptar(palabraOriginal);
console.log(`${palabraOriginal} => ${palabraEncriptada}`);

let palabraDesencriptada = desencriptar(palabraEncriptada);
console.log(`${palabraEncriptada} => ${palabraDesencriptada}`);
