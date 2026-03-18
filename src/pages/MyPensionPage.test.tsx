import React from "react";
import { render, screen } from "@testing-library/react";
import MyPensionPage from "./MyPensionPage";
import { User } from "../types/user";

describe("MyPensionPage", () => {
  const user: User = {
    id: "1",
    name: "John",
    birthYear: 1963,
    employmentStart: new Date(2000, 0, 1).toISOString(),
    annualSalaryNOK: 500000,
    positionPercent: 100,
    pensionAmount: 300000,
  };

  it("should display user name", () => {
    render(<MyPensionPage user={user} />);
    expect(
      screen.getByText((content) => content.includes("Hei, John")),
    ).toBeInTheDocument();
  });

  it("should display YearlyPensionCard", () => {
    render(<MyPensionPage user={user} />);
    expect(screen.getByText("Din estimerte pensjon")).toBeInTheDocument();
  });

  it("should display PensionDetailsCard", () => {
    render(<MyPensionPage user={user} />);
    expect(
      screen.getByText("Pensjonen er beregnet ut fra"),
    ).toBeInTheDocument();
  });

  it("should have learn more link card", () => {
    render(<MyPensionPage user={user} />);
    expect(
      screen.getByText((content) => content.includes("Les mer om pensjon")),
    ).toBeInTheDocument();
  });

  it("should show link text for users born 1963 or later", () => {
    render(<MyPensionPage user={user} />);
    expect(
      screen.getByText((content) =>
        content.includes("født i 1963 eller etter"),
      ),
    ).toBeInTheDocument();
  });
});