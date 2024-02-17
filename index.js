function updatePersonaje(elemento) {
  let namefijo = document.getElementsByClassName("cont-name-p")[0];
  let descFijo = document.getElementsByClassName("cont-info-p")[0];
  let imgBFijo = document.getElementsByClassName("cont-img-bandera")[0];
  let imgPFijo = document.getElementsByClassName("cont-img-personaje")[0];

  // console.log(namefijo, descFijo, imgBFijo, imgPFijo);

  let name = elemento.getElementsByClassName("name")[0];
  let desc = elemento.getElementsByClassName("info")[0];
  let imgGrande = elemento.getElementsByClassName("img-personaje")[0];
  let imgPeq = elemento.getElementsByClassName("img-bandera")[0];

  // console.log(name, desc, imgGrande, imgPeq);

  namefijo.innerText = name.innerText;
  descFijo.innerText = desc.innerText;
  imgBFijo.src = imgPeq.src;
  imgPFijo.src = imgGrande.src;
}


document.addEventListener('mousemove', function(event) {
  var customPointer = document.getElementById('custom-pointer');
  customPointer.style.left = event.clientX + 'px';
  customPointer.style.top = event.clientY + 'px';
});


// scroll
function scrollL() {
  var container = document.querySelector('.cont-img-mini');
  container.scrollLeft -= 250;
}
 
function scrollR() {
  var container = document.querySelector('.cont-img-mini');
  container.scrollLeft += 250;
} 