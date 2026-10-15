
type Loan = { daysOut: number; student: boolean };

function calc(loan: Loan): number {
  const daysLate = loan.daysOut - 14;
  if (daysLate <= 0) {
    return 0;
  }
  const dailyRate = loan.student ? 0.10 : 0.25;
  return Math.min(daysLate * dailyRate, 10);
}

function receipt(loan: Loan): string {
  return `Late fine: $${calc(loan).toFixed(2)}`;
}
