interface Ticket {
  readonly minutes: number;
  readonly electric: boolean;
  hours(): number;
}
function fee(t: Ticket): number {
  let f = 0;
  f = t.hours() * 3;
  f = Math.min(f, 20);
  f = t.minutes <= 15 ? 0 : f;
  return f;
}

function charge(t: Ticket): number {
  return fee(t);
}
