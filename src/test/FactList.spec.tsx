import React from "react";

import { render } from "@testing-library/react";
import FactList from "../components/FactList";

import mockedCatFactList from "./mockedCatFactList.json";

describe("FactList", () => {
  it("renders maxFacts amount of facts", () => {
    const maxFacts = 5;
    const factList = render(
      <FactList
        facts={mockedCatFactList.all.map((fact) => fact.text)}
        maxFacts={maxFacts}
      />
    );

    const factCards = factList.getAllByRole("listitem");

    expect(factCards.length).toBe(maxFacts);
  });
});
