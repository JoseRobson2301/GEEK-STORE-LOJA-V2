const buyButtons = document.querySelectorAll('.produto-container button');

buyButtons.forEach(button => {
button.addEventListener('click', event => {

const li = event.target.closest('li');
    

const name = li.querySelector('h3').textContent;
const price = parseFloat(li.querySelector('p').textContent.replace('R$ ', ''));
    
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push({ name, price });
localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartDisplay();
  });
});

function updateCartDisplay() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartDisplay = document.querySelector('#cart-display');
  cartDisplay.innerHTML = `index: ${cart.length}`;
}

updateCartDisplay();
