interface Ticket {
  readonly minutes: number;
  readonly electric: boolean;
  hours(): number;
}
const HOURLY_RATE = 3;
const DAILY_CAP = 20;
const GRACE_MINUTES = 15;

function charge(t: Ticket): number {
  if (t.minutes <= GRACE_MINUTES) return 0;
  return Math.min(t.hours() * HOURLY_RATE, DAILY_CAP);
}
