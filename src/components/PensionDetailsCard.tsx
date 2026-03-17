import { User } from "../types/user";

interface PensionDetailsProps {
  user: User;
}

export default function PensionDetailsCard({ user }: PensionDetailsProps) {
  return (

  <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
    <p className="text-gray-700 font-semibold mb-6">
    Pensjonen er beregnet ut fra
  </p>
    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
      <span className="text-gray-700">Din alder</span>
      <span className="font-bold text-gray-900">{new Date().getFullYear() - user?.birthYear} år</span>
    </div>

    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
      <span className="text-gray-700">Antall år jobbet i staten</span>
      <span className="font-bold text-gray-900">{new Date().getFullYear() - new Date(user?.employmentStart).getFullYear()} år</span>
    </div>

    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
      <span className="text-gray-700">Stillingsprosent</span>
      <span className="font-bold text-gray-900">{user?.positionPercent} %</span>
    </div>

    <div className="flex justify-between items-center">
      <span className="text-gray-700">Årslønn</span>
      <span className="font-bold text-gray-900">
        {user?.annualSalaryNOK?.toLocaleString('no-NO')} kr
      </span>
    </div>
  </div>

  );
}