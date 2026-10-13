type Cart = { subtotal: number; member: boolean };
function shippingFee(cart: Cart): number {
  if (cart.subtotal >= 50) {
    return 0;
  }
  return 4.99;
}

function bannerText(cart: Cart): string {
  if (cart.subtotal < 50) {
    const missing = 50 - cart.subtotal;
    return `Add $${missing.toFixed(2)} to ship free`;
  }
  return "Your order ships free";
}

function receiptLine(cart: Cart): string {
  const free = cart.subtotal >= 50;
  return free ? "Shipping: free" : "Shipping: $4.99";
}
