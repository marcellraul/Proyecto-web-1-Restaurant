let imagenes = document.querySelectorAll('.gallery_img');
/* aqui vamos a obtener todos los elementos (.gallery__img)en este caso las imagnees.. si fuera con id ponemos #*/
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');/* imagen seleccionada*/
let boton = document.querySelector('#modal__boton');/* para usar el boton del modal*/

for(let i=0; i<imagenes.length; i++){ /* .length para la cantidad de imagenes*/
    imagenes[i].addEventListener('click', function(e){/*cada vez que le de click a cualquiera de las imagenes */
        modal.classList.toggle("modal__open");/* se le va a agragar una clase al elemento modal*/
        let src= e.target.src;/* obten la ruta de la imagen a la cual yo le he dafo click en la imagen*/
        img.setAttribute("src", src);/* le asiaganamos el atributo y le pasamos por parametro la ruta "src"*/
        
        }
    );
}

boton.addEventListener('click', function(){
    modal.classList.toggle('modal__open');/* recordemos que lo hace por el togle, si no tiene una clase lo agrega y la tiene se la quita*/
});








