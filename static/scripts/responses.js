function getBotResponse(input) {
    if (input == 1 ) {
        return "Te dejo un link donde podras dejar tu reclamo www.google.cl <br/>Tu comentaria nos hara mejorar cada día más"; 
    } else if (input == 2) {
        return "Te dejo un link donde podras encontrar los valores de nuestros servisios www.google.cl <br/>Muchas gracias";
    }else if (input == "necesito ayuda") {
        return "Comunicate a este numero +5698748374 encantado te ayudaremos";        
    } else if (input == 3) {
        return "Te dejo un numero de contacto para que te puedas contactar con ellos 93847378";
    }else if (input == "Necesito ayuda!!!") {
        return "Te dejo un numero de contacto para que te puedas contactar y encantado te ayudaremos 93847378";
    }   

    if (input == "chao") {
        return "Chao que tengas un bello dia!";
    } else if (input == "gracias") {
        return "Cuando quieras estaremos disponible para ayudarte!";
    } else {
        return "No entiendo se un poco más especifico";
    }
}