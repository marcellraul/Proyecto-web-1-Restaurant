var navb = document.getElementById('navperfilu');
    navb.addEventListener('click', function() {
       'use strict' ;
        navb.classList.toggle('mostrar2');
    });


let btncaret = document.getElementById('btncaret');
let caret = document.getElementById('caret');
    btncaret.addEventListener('click', function(){
       'use strict' ;
        caret.classList.toggle('mostrar1');
    });

let boton = document.querySelector('#modal__boton');/* para usar el boton del modal*/

let boton2 = document.querySelector('#Modal4'); 

boton.addEventListener('click', function(){
    modal.classList.toggle('modal__open');/* recordemos que lo hace por el togle, si no tiene una clase lo agrega y la tiene se la quita*/
});

boton2.addEventListener('click', function(){
    modal.classList.toggle('modal__open');/* recordemos que lo hace por el togle, si no tiene una clase lo agrega y la tiene se la quita*/
});