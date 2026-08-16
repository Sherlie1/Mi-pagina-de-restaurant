// Control para desplegar Platos Principales
const btnPlatos = document.getElementById('platos-btn');
const contenedorPlatos = document.getElementById('contenedor-platos');

if (btnPlatos && contenedorPlatos) {
  btnPlatos.addEventListener('click', () => {
    contenedorPlatos.classList.toggle('oculto');
  });
}

// Control para desplegar Bebidas
const btnBebidas = document.getElementById('bebidas-btn');
const contenedorBebidas = document.getElementById('contenedor-bebidas');

if (btnBebidas && contenedorBebidas) {
  btnBebidas.addEventListener('click', () => {
    contenedorBebidas.classList.toggle('oculto');
  });
}

// Mensaje de confirmación exclusivo para los botones de pedido
const botonesPedido = document.querySelectorAll('.pedido button');

botonesPedido.forEach(boton => {
  boton.addEventListener('click', () => {
    alert('¡Gracias por su compra!');
  });
});