var buttons = document.querySelectorAll('.btn-productCL');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var productId = this.getAttribute('data-product-id');
    addToCart(productId);
    swal("OBRIGADO GEEKS", "PRODUTO ADICIONADO COM SUCESSO", "success");;
  });
}

function addToCart(productId) {
  var cart = getCart();
  var productIndex = cart.findIndex(function(item) {
      return item.productId === productId;
  });
  
  if (productIndex > -1) {
      cart[productIndex].quantity++;
  } else {
      cart.push({
          productId: productId,
          quantity: 1
      });
  }
  saveCart(cart);
}

function getCart() {
  var cart = [];
  var cartCookie = document.cookie.split('; ').find(function(row) {
      return row.startsWith('cart=');
  });
  
  if (cartCookie) {
      cart = JSON.parse(cartCookie.split('=')[1]);
  }
  
  return cart;
}

function saveCart(cart) {
  document.cookie = 'cart=' + JSON.stringify(cart);
}
