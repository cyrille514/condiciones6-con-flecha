// Función flecha 
const procesarPedido = (evento) => {
    // Evitar que la página se recargue
    evento.preventDefault();

    // Capturar elementos de la interfaz
    const platoSelect = document.getElementById("plato");
    const resultadoParrafo = document.getElementById("parrafoResultado");

    // Capturar si están marcados de forma directa (true o false)
    const esVegano = document.getElementById("vegano").checked;
    const tieneGluten = document.getElementById("gluten").checked;
    const tieneLactosa = document.getElementById("lactosa").checked;
    
    const plato = platoSelect.value;

    let mensaje = "";
    let clasesEstilo = "";

    if (tieneGluten && plato === "pasta") {
        mensaje = "Perfecto pedido corecto!";
        clasesEstilo = "mt-6 p-4 rounded-lg text-center font-semibold bg-gray-300 text-green-400 border border-red-200 block";
    } else if (tieneLactosa && plato === "risotto") {
        mensaje = "Perfecto pedido corecto!.";
        clasesEstilo = "mt-6 p-4 rounded-lg text-center font-semibold bg-gray-300 text-green-400 border border-red-200 block";
    } else if (esVegano && (plato === "carne" || plato === "vegano")) {
        mensaje = "Usted no puede comer este plato";
        clasesEstilo = "mt-6 p-4 rounded-lg text-center font-semibold bg-gray-300 text-red-800 border border-red-200 block";
    } else {
        mensaje = "Lo siento! pedido incorecto";
        clasesEstilo = "mt-6 p-4 rounded-lg text-center font-semibold bg-gray-300 text-red-400 border border-emerald-200 block";
    }

    // Imprimir el mensaje final exacto en pantalla
    resultadoParrafo.innerText = mensaje;
    resultadoParrafo.className = clasesEstilo;
};
