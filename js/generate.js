  // Select the HTML elements with the classes 'wheel' and 'spinBtn'.
let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
  // Generate a random value between 1 and 3600 degrees.
let value = Math.ceil(Math.random() * 3600);

  // Add an onclick event listener to the spin button.
spinBtn.onclick = function(){
    // Apply a CSS transform to rotate the wheel by 'value' degrees.
  wheel.style.transform = "rotate(" + value + "deg)"

    // Generate a new random value between 1 and 3600 degrees and add it to the current value.
  value += Math.ceil(Math.random() * 3600);
}