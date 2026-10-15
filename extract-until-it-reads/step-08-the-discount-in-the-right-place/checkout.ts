type Item = { name: string; price: number; qty: number };
type Order = { items: Item[]; express: boolean; member: boolean };

function confirmOrder(order: Order): string {
  requireItems(order);
  const goods = subtotal(order);
  const discount = memberDiscount(order, goods);
  const total = goods - discount + deliveryFee(order, goods);
  const count = order.items.length;
  return `${count} items, $${total.toFixed(2)}`;
}

function requireItems(order: Order) {
  if (order.items.length === 0) {
    throw new Error("No items");
  }
}

function subtotal(order: Order) {
  let sum = 0;
  for (const item of order.items) {
    sum += item.price * item.qty;
  }
  return sum;
}

function memberDiscount(order: Order, goods: number) {
  return order.member ? goods * 0.1 : 0;
}

function deliveryFee(order: Order, goods: number) {
  let fee = 0;
  fee += goods < 50 ? 4.99 : 0;
  fee += order.express ? 7.5 : 0;
  return fee;
}
