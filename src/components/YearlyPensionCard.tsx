import { User } from "../types/user";

interface YearlyPensionProps {
  user: User;
}

export default function YearlyPensionCard({ user }: YearlyPensionProps) {
  return (
    <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
      <p className="text-xl font-semibold text-blue-100 mb-4">
        Din estimerte pensjon
      </p>
      <p className="text-4xl font-bold">
        {user?.pensionAmount?.toLocaleString("no-NO")} kr
      </p>
      <p className="text-lg font-semibold text-blue-100 mb-2">pr. år</p>
    </div>
  );
}
