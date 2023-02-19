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
});

// Number++
function clicknumber(click){
  const totalcilck =document.querySelector('#count');
  const sumvalue = parseInt(totalcilck.innerText) + click;
  totalcilck.innerText = sumvalue;
  if (sumvalue < 0){
    totalcilck.innerText = 0;
  }
}
function clicknumber2(click){
  const totalcilck =document.querySelector('#count2');
  const sumvalue = parseInt(totalcilck.innerText) + click;
  totalcilck.innerText = sumvalue;
  if (sumvalue < 0){
    totalcilck.innerText = 0;
  }
}