var indexOfSlide = 1; 
showSlide(indexOfSlide); 

function handleSlideOnClick(n) { 
  showSlide((indexOfSlide += n)); 
}

function showSlide(n) {
    // get all elements with the class "slidePicture"
  let slide = document.getElementsByClassName("slidePicture");
  if (n > slide.length) {
    indexOfSlide = 1;
  }
  if (n < 1) {
    indexOfSlide = slide.length;
  }
  for (let i = 0; i < slide.length; i++) {
    // hide all elements
    slide[i].style.display = "none";  
  } //display the one with the right index
  slide[indexOfSlide - 1].style.display = "block"; 
}
