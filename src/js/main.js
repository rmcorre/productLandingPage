const SmoothScroll = require('./vendor/smooth-scroll.polyfills.min.js');
import './vendor/modernizr-3.6.0.min';
import './plugins.js';
import '../img/my-icons-collection/font/flaticon.css';
import '../css/myReboot.css';
import '../css/main.css';

// collapse -----------------------------------------------------------------

const toggler = document.getElementById('toggler');
const collection = document.getElementsByClassName('collapse');
var i;

toggler.addEventListener('click', function() {
  for (i = 0; i < collection.length; i++) {
    collection[i].classList.toggle('active');
    if (collection[i].style.maxHeight) {
      /*If maxHeight has a value that returns true,
      null the value to collapse the element.*/
      /**Remember 0 and null are falsey values***/
      collection[i].style.maxHeight = null;
    } else {
      /*Else maxHeight has a value that returns false,
      expand the element to the height of the scrollHeight
      value*/

      /* scrollHeight returns the entire height of an element in pixels, including padding, but not the border, scrollbar or margin.*/
      collection[i].style.maxHeight = collection[i].scrollHeight + 'px';
    }
  }
});

// Smooth-Scroll ------------------------------------------------------------

//eslint-disable no-unused-vars
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  header: '.site-nav'
});
