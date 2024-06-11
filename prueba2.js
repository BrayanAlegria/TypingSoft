document.addEventListener("DOMContentLoaded", function() {
    // Obtén el elemento del texto de la máquina de escribir
    var typewriterText = document.getElementById("typewriter");
    if (typewriterText) {
        // Define el texto que quieres que aparezca como si estuviera siendo escrito
        var text = "Soluciones de calidad para hacer su vida tecnológica más fácil.";
        var speed = 50; // Velocidad de escritura en milisegundos

        // Aplica estilos al texto
        typewriterText.style.fontSize = "48px"; // Aumenta el tamaño del texto
        typewriterText.style.fontFamily = "Arial, sans-serif"; // Cambia la fuente del texto

        // Inicializa el índice del texto
        var i = 0;

        // Función para mostrar el texto uno por uno
        function typeWriter() {
            if (i < text.length) {
                typewriterText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        // Inicia la animación de escritura
        typeWriter();
    }
});
