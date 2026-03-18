import { User } from "../types/user";

export function calculateAnnualPension(user: User): number {
  const fullYears =
    new Date().getFullYear() - new Date(user.employmentStart).getFullYear();
  const serviceYears = Math.min(fullYears * (user.positionPercent / 100), 30);
  const pensionFactor = serviceYears / 30;
  const estimatedAnnualPension = user.annualSalaryNOK * 0.66 * pensionFactor;

  return Math.round(estimatedAnnualPension);
}

// MVP - Adjust pension by ±5% per year from age 67 for all (simplified - real SPK rules are more complex)
export function calculatePensionAtAge(
  baseAmount: number,
  withdrawalAge: number,
  baselineAge: number = 67,
): number {
  const adjustment = 1 + (withdrawalAge - baselineAge) * 0.05;
  return Math.round(baseAmount * adjustment);
}
