type Item = { name: string; price: number; qty: number };
type Order = { items: Item[]; express: boolean; member: boolean };

function confirmOrder(order: Order): string {
  requireItems(order);
  const goods = subtotal(order);
  let total = goods;
  total += goods < 50 ? 4.99 : 0;
  total += order.express ? 7.5 : 0;
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
