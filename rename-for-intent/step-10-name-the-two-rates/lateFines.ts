
type Loan = { daysOut: number; student: boolean };

const LOAN_DAYS = 14;
const STUDENT_RATE = 0.10;
const STANDARD_RATE = 0.25;

function calc(loan: Loan): number {
  const daysLate = loan.daysOut - LOAN_DAYS;
  if (daysLate <= 0) {
    return 0;
  }
  const dailyRate = loan.student ? STUDENT_RATE : STANDARD_RATE;
  return Math.min(daysLate * dailyRate, 10);
}

function receipt(loan: Loan): string {
  return `Late fine: $${calc(loan).toFixed(2)}`;
}
