"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// scroll header
window.addEventListener('scroll', () => {
  // const header_top = $('.content-header-top');
  const nav = $('.content-header-bottom');

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    nav.style.top = '0';
    nav.style.backgroundColor = '#ffffff';
    nav.style.padding = '2px 0';
    nav.style.transition = " .4s linear";
  } else {
    nav.style.top = '50px';
    nav.style.backgroundColor = 'transparent';
    nav.style.padding = '0';
  }
})

// silder 

var album = [
  "src/img/shop/product-detail-01.jpg",
  "src/img/shop/product-detail-02.jpg",
  "src/img/shop/product-detail-03.jpg",
]
var currentIndex = 0;
function slideshow() {
  if (currentIndex > 2) {
    currentIndex = 0;
  }
  document.getElementById("anh").src = album[currentIndex];
  currentIndex++;
  setTimeout("slideshow()", 5000);
}
  var left = function(x){
   currentIndex += Number(x);
   if ( currentIndex > 2){
     currentIndex = 0;
   }
   if ( currentIndex < 0){
     currentIndex = 2;
   }
    document.getElementById("anh").src = album[currentIndex];
   }
  slideshow();
  
  //  product button
  document.getElementById('product_sp').style.display = "none"
  function showProduct() {
    var x = document.getElementById('product_sp');
    console.log([x]);
  
    if (x.style.display == "flex") {
      x.style.display = "none"
      x.style.transition = ".6s";
    } else {
      x.style.display = "flex"
      x.style.justifyContent = "center"
      x.style.alignItems = "center"
    }
  }
  
// Number++
function clicknumber(click){
  const totalcilck =document.querySelector('#count');
  const sumvalue = parseInt(totalcilck.innerText) + click;
  totalcilck.innerText = sumvalue;
  if (sumvalue < 0){
    totalcilck.innerText = 0;
  }
}