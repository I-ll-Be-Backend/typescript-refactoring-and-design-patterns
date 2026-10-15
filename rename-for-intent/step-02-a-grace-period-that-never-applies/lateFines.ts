
type Loan = { d: number; f: boolean };

function calc(l: Loan): number {
  if (l.d <= 3) {
    return 0;
  }
  const x = l.d - 14;
  if (x <= 0) {
    return 0;
  }
  const r = l.f ? 0.10 : 0.25;
  return Math.min(x * r, 10);
}

function receipt(l: Loan): string {
  return `Late fine: $${calc(l).toFixed(2)}`;
}
