import { useState, useEffect } from "react";
import { User } from "../types/user";
import { calculatePensionAtAge } from "../utils/pensionCalculator";

interface YearlyPensionProps {
  user: User;
}

export default function YearlyPensionCard({ user }: YearlyPensionProps) {
  const [selectedYear, setSelectedYear] = useState<number>(67);

  useEffect(() => {
    setSelectedYear(67);
  }, [user.id]);

  const startYear = user.birthYear >= 1963 ? 67 : 62;
  const withdrawalYears = Array.from(
    { length: 71 - startYear + 1 },
    (_, i) => startYear + i,
  );

  const adjustedPension = calculatePensionAtAge(
    user?.pensionAmount || 0,
    selectedYear,
  );

  return (
    <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
      <p className="text-xl font-semibold text-blue-100 mb-4">
        Din estimerte pensjon
      </p>

      <p className="text-4xl font-bold mb-2">
        {adjustedPension.toLocaleString("no-NO")} kr
      </p>
      <p className="text-lg font-semibold text-blue-100 mb-4">pr. år</p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-2">
        <label htmlFor="withdrawal-year" className="text-blue-100">
          Uttak ved:
        </label>
        <select
          id="withdrawal-year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="w-full md:w-auto px-4 py-2 border border-blue-400 rounded-lg text-blue-600 font-semibold focus:ring-2 focus:ring-white focus:border-transparent"
        >
          {withdrawalYears.map((year) => (
            <option key={year} value={year}>
              {year} år
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
