let boton = document.querySelector('.button'); 
let notificacion = document.querySelector('.notificacion'); 

boton.addEventListener('click', function escribir(){
 
    
   notificacion.style.visibility = 'visible'
 	notificacion.textContent = 1;
 

 
  console.log('tocado boton');
      

})