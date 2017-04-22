function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

let flwrNum = getRandomArbitrary(10, 20);

let more = setInterval(function(){
  let flwr = document.createElement('div');
  let dim = getRandomArbitrary(40, 70);
  flwr.classList.add('sun-flwr');
  flwr.innerHTML = `<div class="sun-flwr__leaf--left"></div>
  <div class="sun-flwr__leaf--right"></div>
  <div class="sun-flwr__stem"></div>
  <div class="sun-flwr__center"></div>
  <div class="sun-flwr__pedal--1"></div>
  <div class="sun-flwr__pedal--2"></div>
  <div class="sun-flwr__pedal--3"></div>
  <div class="sun-flwr__pedal--4"></div>
  <div class="sun-flwr__pedal--5"></div>
  <div class="sun-flwr__pedal--6"></div>
  <div class="sun-flwr__pedal--7"></div>
  <div class="sun-flwr__pedal--8"></div>
  <div class="sun-flwr__pedal--9"></div>
  <div class="sun-flwr__pedal--10"></div>
  <div class="sun-flwr__pedal--11"></div>
  <div class="sun-flwr__pedal--12"></div>`;
  flwr.style.left = getRandomArbitrary(0, 100) + "vw";
  flwr.style.height = dim + "vmin";
  flwr.style.width = dim + "vmin";
  document.querySelector('body').appendChild(flwr);
}, 800);

setTimeout(function(){
  window.clearInterval(more);
}, 16000);