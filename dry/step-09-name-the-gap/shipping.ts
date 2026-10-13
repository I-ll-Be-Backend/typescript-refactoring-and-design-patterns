type Cart = { subtotal: number; member: boolean };
const FREE_SHIPPING_FROM = 50;
const SHIPPING_FEE = 4.99;

function shipsFree(cart: Cart): boolean {
  return cart.subtotal >= FREE_SHIPPING_FROM;
}

function amountToFreeShipping(cart: Cart): number {
  return FREE_SHIPPING_FROM - cart.subtotal;
}

function shippingFee(cart: Cart): number {
  if (shipsFree(cart)) {
    return 0;
  }
  return SHIPPING_FEE;
}

function bannerText(cart: Cart): string {
  if (!shipsFree(cart)) {
    const missing = amountToFreeShipping(cart);
    return `Add $${missing.toFixed(2)} to ship free`;
  }
  return "Your order ships free";
}

function receiptLine(cart: Cart): string {
  const free = shipsFree(cart);
  return free ? "Shipping: free" : `Shipping: $${SHIPPING_FEE}`;
}
