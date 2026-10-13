type Cart = { subtotal: number; member: boolean };
const FREE_SHIPPING_FROM = 50;
const SHIPPING_FEE = 4.99;

function shippingFee(cart: Cart): number {
  if (cart.subtotal >= FREE_SHIPPING_FROM) {
    return 0;
  }
  return SHIPPING_FEE;
}

function bannerText(cart: Cart): string {
  if (cart.subtotal < FREE_SHIPPING_FROM) {
    const missing = FREE_SHIPPING_FROM - cart.subtotal;
    return `Add $${missing.toFixed(2)} to ship free`;
  }
  return "Your order ships free";
}

function receiptLine(cart: Cart): string {
  const free = cart.subtotal >= FREE_SHIPPING_FROM;
  return free ? "Shipping: free" : `Shipping: $${SHIPPING_FEE}`;
}
