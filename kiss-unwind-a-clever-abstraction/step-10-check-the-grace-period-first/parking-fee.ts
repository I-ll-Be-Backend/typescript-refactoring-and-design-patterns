interface Ticket {
  readonly minutes: number;
  readonly electric: boolean;
  hours(): number;
}
function fee(t: Ticket): number {
  if (t.minutes <= 15) return 0;
  return Math.min(t.hours() * 3, 20);
}

function charge(t: Ticket): number {
  return fee(t);
}
