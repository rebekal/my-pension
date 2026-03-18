import { User } from "../types/user";

export function calculateAnnualPension(user: User): number {
  const fullYears =
    new Date().getFullYear() - new Date(user.employmentStart).getFullYear();
  const serviceYears = Math.min(fullYears * (user.positionPercent / 100), 30);
  const pensionFactor = serviceYears / 30;
  const estimatedAnnualPension = user.annualSalaryNOK * 0.66 * pensionFactor;

  return Math.round(estimatedAnnualPension);
}
