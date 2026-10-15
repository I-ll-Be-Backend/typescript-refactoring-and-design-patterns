type Item = { name: string; price: number; qty: number };
type Order = { items: Item[]; express: boolean; member: boolean };

function confirmOrder(order: Order): string {
  requireItems(order);
  let total = 0;
  for (const item of order.items) {
    total += item.price * item.qty;
  }
  total += total < 50 ? 4.99 : 0;
  total += order.express ? 7.5 : 0;
  const count = order.items.length;
  return `${count} items, $${total.toFixed(2)}`;
}

function requireItems(order: Order) {
  if (order.items.length === 0) {
    throw new Error("No items");
  }
}
