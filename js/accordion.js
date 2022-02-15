const accordion = document.getElementsByClassName('accordion__container');
const accActive = document.getElementsByClassName('accordion__active');


Array.prototype.forEach.call(accordion, function(element) {
  element.addEventListener('click', function() {

    if (this.classList.contains('accordion__active')) {
      this.classList.remove('accordion__active');
    } else {
      Array.prototype.forEach.call(accActive, function(element) {
        element.classList.remove('accordion__active');
      });
      this.classList.add('accordion__active');
    }
  
    // this.classList.toggle('accordion__active');
  });
});

