import { obtenerMensajeAleatorio } from './mensajes.js';

document.getElementById('generar-btn').addEventListener('click', () => {
  const mensaje = obtenerMensajeAleatorio();
  document.getElementById('mensaje').textContent = mensaje;
});