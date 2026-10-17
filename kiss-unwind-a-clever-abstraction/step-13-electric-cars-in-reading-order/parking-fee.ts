interface Ticket {
  readonly minutes: number;
  readonly electric: boolean;
  hours(): number;
}
const HOURLY_RATE = 3;
const DAILY_CAP = 20;
const GRACE_MINUTES = 15;
const EV_FREE_HOURS = 2;

function charge(t: Ticket): number {
  if (t.minutes <= GRACE_MINUTES) return 0;
  let hours = t.hours();
  if (t.electric) hours = Math.max(0, hours - EV_FREE_HOURS);
  return Math.min(hours * HOURLY_RATE, DAILY_CAP);
}
