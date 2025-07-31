// FUNCIÓN PARA REVISAR CÓDIGO DE LA ETAPA 1
function revisarCodigoEtapa1() {
    // Se obtiene el contenido del área de texto donde el usuario escribe su código
    const codigo = document.getElementById("codigo").value;
    let mensaje = "";

    // Se revisa si el código contiene los elementos clave para esta etapa
    if (!codigo.includes("for")) mensaje += "⚠️ Te falta un bucle 'for'.<br>";
    if (!codigo.includes("range")) mensaje += "⚠️ Usá 'range()'.<br>";
    if (!codigo.includes("  print")) mensaje += "⚠️ Falta una impresión con 'print()' o la identación.<br>";

    // Si cumple con todos los requisitos, muestra un mensaje de éxito y permite continuar
    if (codigo.includes("for") && codigo.includes("range") && codigo.includes("  print")) {
        mensaje = "✅ ¡Correcto! Superaste la primera etapa.";
        document.getElementById("continuar").classList.remove("oculto");
    }

    // Muestra los mensajes de revisión en la interfaz
    document.getElementById("mensajeRevision").innerHTML = mensaje;
}

// FUNCIÓN PARA REVISAR CÓDIGO DE LA ETAPA 2
function revisarCodigoEtapa2() {
    const codigo = document.getElementById("codigo").value;
    let mensaje = "";

    // Revisión específica para esta etapa: range(1, 11)
    if (!codigo.includes("for")) mensaje += "⚠️ Falta un bucle 'for'.<br>";
    if (!codigo.includes("range(1, 11)")) mensaje += "⚠️ Debés usar range(1, 11).<br>";
    if (!codigo.includes("  print")) mensaje += "⚠️ Usá 'print()' para mostrar los números o revisá la identación.<br>";

    // Verifica si el código cumple todos los requisitos para pasar de etapa
    if (codigo.includes("for") && codigo.includes("range(1, 11)") && codigo.includes("  print")) {
        mensaje = "✅ ¡Bien! La segunda puerta se ha abierto.";
        document.getElementById("continuar").classList.remove("oculto");
    }

    document.getElementById("mensajeRevision").innerHTML = mensaje;
}

// FUNCIÓN PARA REVISAR CÓDIGO DE LA ETAPA 3
function revisarCodigoEtapa3() {
    const codigo = document.getElementById("codigo").value;
    let mensaje = "";
    document.getElementById("volverIndex").classList.add("oculto");

    // Revisión específica para esta etapa: conteo descendente con range(10, 0, -1)
    if (!codigo.includes("for")) mensaje += "⚠️ Necesitás un bucle 'for'.<br>";
    if (!codigo.includes("range(10, 0, -1)")) mensaje += "⚠️ Recordá usar range(10, 0, -1).<br>";
    if (!codigo.includes("  print")) mensaje += "⚠️ Tenés que mostrar los números con 'print()' o falta identación.<br>";

    // Si el código cumple todos los requisitos, se permite avanzar
    if (codigo.includes("for") && codigo.includes("range(10, 0, -1)") && codigo.includes("  print")) {
        mensaje = "✅ ¡Has vencido al Guardián!";
        document.getElementById("continuar").classList.remove("oculto");
        document.getElementById("volverAnterior").classList.add("oculto");
        document.getElementById("volverIndex").classList.remove("oculto");
    }

    document.getElementById("mensajeRevision").innerHTML = mensaje;
    
}
