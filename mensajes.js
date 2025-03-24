const mensajes = [
    "Hoy es el día perfecto para descubrir algo nuevo.",
    "Nunca es tarde para reinventarte y comenzar otra vez.",
    "La constancia y la práctica te llevan a la excelencia.",
    "El éxito es la suma de pequeños pasos dados con determinación.",
    "Cada amanecer trae consigo nuevas oportunidades para crecer."
  ];
  
  export function obtenerMensajeAleatorio() {
    const indice = Math.floor(Math.random() * mensajes.length);
    return mensajes[indice];
  }
  