let boton = document.querySelector('.button'); 
let cart = document.querySelector('.carrito');
let notificacion = document.querySelector('.notificacion'); 
let b = document.querySelector('.barra');
let spa = document.querySelector('.text-span')

boton.addEventListener('click', function escribir(){
 
    
   notificacion.style.visibility = 'visible';
 	notificacion.textContent = 1;
 
   spa.textContent='Perfume 149.99$ added to cart :D';
      

});

  cart.addEventListener('click', function hola(){
     b.style.visibility=='hidden'? b.style.visibility='visible': b.style.visibility='hidden';

  });
