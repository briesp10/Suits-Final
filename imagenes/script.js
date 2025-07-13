let botontexto = document.getElementById('botontexto');

let texto = document.getElementById('texto');

botontexto.addEventListener('click', toggleText);

function toggleText() {

texto.classList.toggle ('ver');   
 
if (texto.classList.contains ('ver')) {
    botontexto.innerHTML = 'Leer Menos';
}
else {botontexto.innerHTML = 'Leer Mas';

}



}