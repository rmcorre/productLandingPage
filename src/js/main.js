import './vendor/modernizr-3.6.0.min';
import './plugins.js';
import '../img/my-icons-collection/font/flaticon.css';
import '../css/myReboot.css';
import '../css/main.css';

// collapse ----------------------------------------------------------------------

const toggler = document.getElementById('toggler');
const collection = document.getElementsByClassName('collapse');
var i;

toggler.addEventListener('click', function() {
  for (i = 0; i < collection.length; i++) {
    collection[i].classList.toggle('active');
    if (collection[i].style.maxHeight) {
      collection[i].style.maxHeight = null;
    } else {
      collection[i].style.maxHeight = collection[i].scrollHeight + 'px';
    }
  }
});
