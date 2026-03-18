import React from "react";
import { render, screen } from "@testing-library/react";
import PensionDetailsCard from "./PensionDetailsCard";
import { User } from "../types/user";

describe("PensionDetailsCard", () => {
  const user: User = {
    id: "1",
    name: "John",
    birthYear: 1960,
    employmentStart: new Date(2000, 0, 1).toISOString(),
    annualSalaryNOK: 500000,
    positionPercent: 100,
  };

  it("should display birth year", () => {
    render(<PensionDetailsCard user={user} />);
    expect(screen.getByText("1960")).toBeInTheDocument();
  });

  it("should display position percent", () => {
    render(<PensionDetailsCard user={user} />);
    expect(
      screen.getByText((content) => content.includes("100")),
    ).toBeInTheDocument();
  });

  it("should display annual salary", () => {
    render(<PensionDetailsCard user={user} />);
    expect(
      screen.getByText((content) => content.includes("500")),
    ).toBeInTheDocument();
  });

  it("should display employment years", () => {
    render(<PensionDetailsCard user={user} />);
    expect(
      screen.getByText((content) => content.includes("26")),
    ).toBeInTheDocument();
  });
});
