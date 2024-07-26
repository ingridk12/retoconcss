<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Encriptador</title>
    <link rel="shortcut icon" type="image/x-icon" href="./imagenes/icono-removebg-preview.png">
    <link rel="stylesheet" href="./estilos/styles.css">
    <script src="encriptador.js"></script> 
</head>
<body>
    <header>
        <div class="encabezado">
            <img src="./imagenes/interrogacion.png" alt="Logo" class="logo">
            <div>
                <h1 class="titulo">Encripta y desencripta texto</h1>
            </div>
        </div>
    </header>
    <div class="outer-container">
        <div class="container">
            <div class="left-column">
                <textarea class="input-area" id="inputPalabra" placeholder="Escribe el texto aquí..."></textarea>
                <span class="info">
                    <img src="./imagenes/!.svg" alt="advertencia" />
                    Solo letras minúsculas y sin acentos
                </span>
                <div class="buttons">
                    <button class="encrypt-button" onclick="encriptarYMostrar(); mostrarBoton()">Encriptar</button>
                    <button class="decrypt-button" onclick="desencriptarYMostrar()">Desencriptar</button>
                </div>
            </div>
            <div class="right-column">
                <img id="img" src="./imagenes/animado.svg" alt="Imagen" class="right-image">
                <textarea class="output-area" id="resultado" placeholder="Ningún mensaje fue encontrado"></textarea>
                <p class="message">Ingrese el texto que desea encriptar o desencriptar</p>
                <div class="action-buttons">
                    <button id="bn_copiar" class="copy-button bn_ocultar" onclick="copiarTexto()">Copiar</button>
                    <button id="bn_reiniciar" class="reset-button bn_ocultar" onclick="reiniciarTexto()">Reiniciar</button>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">
        <p>© 2024 Desarrollado por: Ingrid Katerine Vega Ordoñez</p>
    </footer>
    <script>
        function encriptarYMostrar() {
            let palabra = document.getElementById('inputPalabra').value.trim();
            let palabraEncriptada = encriptar(palabra);
            document.getElementById('resultado').innerText = `${palabraEncriptada}`;
        }

        function desencriptarYMostrar() {
            let palabraEncriptada = document.getElementById('inputPalabra').value.trim();
            let palabraDesencriptada = desencriptar(palabraEncriptada);
            document.getElementById('resultado').innerText = ` ${palabraDesencriptada}`;
        }
        
        function copiarTexto(){
            let textos = document.getElementById('resultado');
            textos.select();
            textos.setSelectionRange(0, 99999);
            document.execCommand("copy");
            alert("Texto copiado exitosamente")
        }
        
        function reiniciarTexto() {
            document.getElementById('inputPalabra').value = '';
            document.getElementById('resultado').innerText = '';
            document.getElementById('bn_copiar').style.display = 'none';
            document.getElementById('bn_reiniciar').style.display = 'none';
            document.getElementById('img').style.visibility = 'visible';
        }

        function mostrarBoton(){
            document.getElementById('bn_copiar').style.display = 'block';
            document.getElementById('bn_reiniciar').style.display = 'block';
            document.getElementById('img').style.visibility = 'hidden';
        }
    </script>
</body>
</html>
