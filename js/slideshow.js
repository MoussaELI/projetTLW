// bouttons pour faire déffiler les diapos sur la page d'accueil ( sur les cotés des images)
function plusSlides(dest, plusmoins) {                              
  var slides = document.querySelectorAll("#"+dest+" .mySlidesFade");
  var i;
  for (i = 0; i < slides.length; i++) {
    if (slides[i].style.display != "none") {
      break;
    }
  }

  if (plusmoins == 1) {
    showSlides(dest, 'increment', (i + 1) % slides.length);
  } else {
    showSlides(dest, 'increment', (i + slides.length - 1) % slides.length);
  }
}

// fixe l'image lors du changement de diapositive
function currentSlide(dest, newIndex) {
  showSlides(dest, 'fixe', newIndex);
}

//affiche les diapositives et coordonne les fonctions précédentes pour avoir un diaporama d'images sur l'accueil
function showSlides(dest, type, newIndex) {

  var i;
  var slides = document.querySelectorAll("#"+dest+" .mySlidesFade");
  var dots = document.querySelectorAll("#"+dest+" .dot");
  for (i = 0; i < slides.length; i++) {
      if (i == newIndex) {
        slides[newIndex].style.display = "block"
      } else {
        slides[i].style.display = "none";
      }
  }

  for (i = 0; i < dots.length; i++) {
    if (i == newIndex) {
      dots[newIndex].className += " active"
    } else {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  }
}




