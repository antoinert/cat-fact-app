import React from "react";

import { render } from "@testing-library/react";
import ExpandableTextCard from "../components/ExpandableTextCard";

describe("ExpandableTextCard", () => {
  const mockFact = "Cats rule the internet.";

  it("renders fact text", () => {
    const factCard = render(
      <ExpandableTextCard>{mockFact}</ExpandableTextCard>
    );
    expect(factCard.container).toHaveTextContent(mockFact);
  });

  it("is not expanded initially", () => {
    const factCard = render(
      <ExpandableTextCard>{mockFact}</ExpandableTextCard>
    );
    const factText = factCard.getByText(mockFact);

    expect(factText).toHaveAttribute("aria-expanded", "false");
  });

  it("expands and collapses on click", () => {
    const factCard = render(
      <ExpandableTextCard>{mockFact}</ExpandableTextCard>
    );
    const factText = factCard.getByText(mockFact);

    factText.click();

    expect(factText).toHaveAttribute("aria-expanded", "true");

    factText.click();

    expect(factText).toHaveAttribute("aria-expanded", "false");
  });
});
