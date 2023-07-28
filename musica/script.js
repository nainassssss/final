const fila = document.querySelector('.contenedorcarousel');
const albumes = document.querySelector('.album');
const flechaizquierda = document.getElementById('flechaizquierda');
const flechaderecha = document.getElementById('flechaderecha');
flechaderecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth; 
});
    flechaizquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth; 
});