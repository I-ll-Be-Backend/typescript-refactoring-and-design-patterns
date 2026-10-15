
type Loan = { daysOut: number; f: boolean };

function calc(l: Loan): number {
  const x = l.daysOut - 14;
  if (x <= 0) {
    return 0;
  }
  const r = l.f ? 0.10 : 0.25;
  return Math.min(x * r, 10);
}

function receipt(l: Loan): string {
  return `Late fine: $${calc(l).toFixed(2)}`;
}
