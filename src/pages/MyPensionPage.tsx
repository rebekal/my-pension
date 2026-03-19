import { useState } from "react";
import { User } from "../types/user";
import { dummyUsers, usersWithPension } from "../data/dummyUsers";
import YearlyPensionCard from "../components/YearlyPensionCard";
import PensionDetailsCard from "../components/PensionDetailsCard";

interface MyPensionPageProps {
  user: User;
}

export default function MyPensionPage({ user }: MyPensionPageProps) {
  const [selectedUser, setSelectedUser] = useState<User>(user);

  const handleUserChange = (userId: string) => {
    const newUser = usersWithPension.find((u) => u.id === userId);
    if (newUser) {
      setSelectedUser(newUser);
    }
  };

  return (
    <div>
      <div className="mb-10">
        <p className="text-sm text-gray-600 mb-2">
          Demo: Velg et medlem for å se estimert pensjon
        </p>
        <select
          id="user-select"
          value={selectedUser?.id}
          onChange={(e) => handleUserChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {dummyUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user?.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hei, {selectedUser?.name}
        </h1>
        <h2 className="text-gray-900 text-2xl">
          Din pensjon fra Statens Pensjonskasse
        </h2>
      </div>

      <div className="space-y-6">
        <YearlyPensionCard user={selectedUser} />
        <PensionDetailsCard user={selectedUser} />
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-6 mt-6">
        <p className="font-semibold text-blue-900 mb-6">Lær mer om pensjon</p>
        <a
          href={
            selectedUser?.birthYear < 1963
              ? process.env.REACT_APP_PENSION_OLD_LAW_URL
              : process.env.REACT_APP_PENSION_NEW_LAW_URL
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Les mer om pensjon fra Statens Pensjonskasse (åpner i ny fane)"
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
        >
          Les mer om pensjon fra SPK for deg som er født{" "}
          {selectedUser?.birthYear < 1963
            ? "i 1962 eller før"
            : "i 1963 eller etter"}{" "}
          →
        </a>
      </div>
    </div>
  );
}
