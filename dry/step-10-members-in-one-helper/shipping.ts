type Cart = { subtotal: number; member: boolean };
const FREE_SHIPPING_FROM = 50;
const MEMBER_FREE_SHIPPING_FROM = 25;
const SHIPPING_FEE = 4.99;

function freeShippingFrom(cart: Cart): number {
  return cart.member ? MEMBER_FREE_SHIPPING_FROM : FREE_SHIPPING_FROM;
}

function shipsFree(cart: Cart): boolean {
  return cart.subtotal >= freeShippingFrom(cart);
}

function amountToFreeShipping(cart: Cart): number {
  return freeShippingFrom(cart) - cart.subtotal;
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
