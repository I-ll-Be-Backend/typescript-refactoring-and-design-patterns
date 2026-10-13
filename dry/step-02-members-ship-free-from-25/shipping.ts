type Cart = { subtotal: number; member: boolean };
function shippingFee(cart: Cart): number {
  const freeFrom = cart.member ? 25 : 50;
  if (cart.subtotal >= freeFrom) {
    return 0;
  }
  return 4.99;
}

function bannerText(cart: Cart): string {
  const limit = cart.member ? 25 : 50;
  if (cart.subtotal < limit) {
    const missing = limit - cart.subtotal;
    return `Add $${missing.toFixed(2)} to ship free`;
  }
  return "Your order ships free";
}

function receiptLine(cart: Cart): string {
  const free = cart.subtotal >= 50;
  return free ? "Shipping: free" : "Shipping: $4.99";
}
