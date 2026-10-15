
type Loan = { daysOut: number; student: boolean };

function calc(l: Loan): number {
  const daysLate = l.daysOut - 14;
  if (daysLate <= 0) {
    return 0;
  }
  const dailyRate = l.student ? 0.10 : 0.25;
  return Math.min(daysLate * dailyRate, 10);
}

function receipt(l: Loan): string {
  return `Late fine: $${calc(l).toFixed(2)}`;
}
