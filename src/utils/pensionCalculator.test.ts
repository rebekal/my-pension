import {
  calculateAnnualPension,
  calculatePensionAtAge,
} from "./pensionCalculator";
import { User } from "../types/user";

describe("Pension Calculations", () => {
  const user: User = {
    id: "1",
    name: "John",
    birthYear: 1960,
    employmentStart: new Date(2000, 0, 1).toISOString(),
    annualSalaryNOK: 500000,
    positionPercent: 100,
  };

  describe("calculateAnnualPension", () => {
    it("should return a pension amount", () => {
      const result = calculateAnnualPension(user);
      expect(result).toBeGreaterThan(0);
    });

    it("should reduce pension when part-time", () => {
      const partTime = { ...user, positionPercent: 50 };

      expect(calculateAnnualPension(partTime)).toBeLessThan(
        calculateAnnualPension(user),
      );
    });
  });

  describe("calculatePensionAtAge", () => {
    it("should return same amount at age 67", () => {
      expect(calculatePensionAtAge(100000, 67)).toBe(100000);
    });

    it("should increase 5% per year after age 67", () => {
      expect(calculatePensionAtAge(100000, 70)).toBe(115000);
    });
  });
});
