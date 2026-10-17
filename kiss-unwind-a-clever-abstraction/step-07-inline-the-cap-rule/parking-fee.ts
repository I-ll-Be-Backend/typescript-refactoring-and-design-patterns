interface Ticket {
  readonly minutes: number;
  readonly electric: boolean;
  hours(): number;
}
type Rule = (t: Ticket, fee: number) => number;

const RULES: Record<string, Rule> = {
  base: (t, f) => t.hours() * 3,
  cap: (t, f) => Math.min(f, 20),
  grace: (t, f) => (t.minutes <= 15 ? 0 : f),
};

function fee(t: Ticket): number {
  let f = 0;
  f = t.hours() * 3;
  f = Math.min(f, 20);
  f = RULES["grace"](t, f);
  return f;
}

function charge(t: Ticket): number {
  return fee(t);
}
