function getBotResponse(input) {
    if (input == "hola" ) {
        return "Hola soy la asistente virtual de Andimar en que te puedo ayudar!!!";
    } else if (input == "necesito un contacto") {
        return "Dejanos tu numero nosotros te llamaremos lo antes posible";
    }else if (input == "necesito ayuda") {
        return "Comunicate a este numero +5698748374 encantado te ayudaremos";
        
    } else if (input == +569) {
        return "Gracias, una de nuestras ejecutiva te contactara";
    }

    if (input == "chao") {
        return "Chao que tengas un bello dia!";
    } else if (input == "gracias") {
        return "Cuando quieras estaremos disponible para ayudarte!";
    } else {
        return "No entiendo se un poco más especifico";
    }
}