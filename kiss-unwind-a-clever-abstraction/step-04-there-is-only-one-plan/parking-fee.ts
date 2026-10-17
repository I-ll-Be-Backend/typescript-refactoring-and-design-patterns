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
  const plan = ["base", "cap", "grace"];
  let f = 0;
  for (const name of plan) f = RULES[name](t, f);
  return f;
}

function charge(t: Ticket): number {
  return fee(t);
}
