type Booking = { checkIn: Date; total: number; nights: number; rate: string; loyal: boolean };
function daysBetween(from: Date, to: Date): number {
  return Math.floor((to.getTime() - from.getTime()) / 86_400_000);
}
function fee(b: Booking, today: Date): number {
  // days left before check-in
  const d = daysBetween(today, b.checkIn);
  // free cancellation 14 days or more before check-in
  if (d >= 14) return 0;
  // non-refundable or under 2 days out: pay in full
  if (b.rate === "N" || d < 2) return b.total;
  // otherwise half the total
  const f = b.total * 0.5;
  // partner contracts require a one-night minimum
  return Math.max(f, b.total / b.nights);
}
