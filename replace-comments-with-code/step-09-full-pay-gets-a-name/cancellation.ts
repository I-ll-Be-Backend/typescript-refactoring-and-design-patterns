type Booking = { checkIn: Date; total: number; nights: number; rate: string; loyal: boolean };
function daysBetween(from: Date, to: Date): number {
  return Math.floor((to.getTime() - from.getTime()) / 86_400_000);
}
const FREE_CANCELLATION_DAYS = 14;
const LAST_MINUTE_DAYS = 2;
const NON_REFUNDABLE = "N";

function fee(b: Booking, today: Date): number {
  const daysBeforeCheckIn = daysBetween(today, b.checkIn);
  if (isFreeCancellation(daysBeforeCheckIn)) return 0;
  if (paysInFull(b, daysBeforeCheckIn)) return b.total;
  // otherwise half the total
  const f = b.total * 0.5;
  // partner contracts require a one-night minimum
  return Math.max(f, b.total / b.nights);
}

function isFreeCancellation(days: number): boolean {
  return days >= FREE_CANCELLATION_DAYS;
}

function paysInFull(b: Booking, days: number): boolean {
  return b.rate === NON_REFUNDABLE || days < LAST_MINUTE_DAYS;
}
