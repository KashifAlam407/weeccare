// const itemPrice = 299;  // Price per item
//         let quantity = 1;         // Initial quantity
//         let cart = [];            // Array to store cart items

//         // Update the displayed quantity and total price
//         function updateCart() {
//             document.getElementById('item-quantity').textContent = quantity;
//             document.getElementById('total-price').textContent = (itemPrice * quantity).toFixed(2);
//         }

//         // Increment quantity
//         function increment() {
//             quantity++;
//             updateCart();
//         }

//         // Decrement quantity (cannot go below 1)
//         function decrement() {
//             if (quantity > 1) {
//                 quantity--;
//                 updateCart();
//             }
//         }

//         // Add the current item to the cart
//         function addToCart() {
//             const cartItem = {
//                 name: "Product 1",
//                 price: itemPrice,
//                 quantity: quantity,
//                 total: (itemPrice * quantity).toFixed(2)
//             };

//             cart.push(cartItem);
//             updateCartList();
//             alert(`${cartItem.name} has been added to your cart!`);
//         }

//         // Display cart items in the cart list
//         function updateCartList() {
//             const cartList = document.getElementById('cart-list');
//             const cartTotal = document.getElementById('cart-total');
//             cartList.innerHTML = ''; // Clear previous cart items

//             let totalPrice = 0;

//             cart.forEach(item => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = `${item.name} - Quantity: ${item.quantity} - Price: $${item.total}`;
//                 cartList.appendChild(listItem);
//                 totalPrice += parseFloat(item.total);
//             });

//             cartTotal.textContent = `Total Cart Price: $${totalPrice.toFixed(2)}`;
//         }

//         // Simulate the "Buy Now" action
//         function buyNow() {
//             if (cart.length === 0) {
//                 alert('Your cart is empty!');
//             } else {
//                 alert('Proceeding to checkout...');
//                 cart = [];  // Clear the cart after purchase
//                 updateCartList();  // Update the cart display
//             }
//         }