import React from "react";
import { render, screen } from "@testing-library/react";
import YearlyPensionCard from "./YearlyPensionCard";
import { User } from "../types/user";

describe("YearlyPensionCard", () => {
  const user: User = {
    id: "1",
    name: "John",
    birthYear: 1960,
    employmentStart: new Date(2000, 0, 1).toISOString(),
    annualSalaryNOK: 500000,
    positionPercent: 100,
    pensionAmount: 300000,
  };

  it("should display pension amount", () => {
    render(<YearlyPensionCard user={user} />);
    expect(
      screen.getByText((content) => content.includes("300")),
    ).toBeInTheDocument();
  });

  it("should have withdrawal year select text", () => {
    render(<YearlyPensionCard user={user} />);
    expect(screen.getByLabelText("Uttak ved:")).toBeInTheDocument();
  });
});
