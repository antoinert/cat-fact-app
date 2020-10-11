import React from "react";

import nock from "nock";
import { render } from "@testing-library/react";

import mockedCatFactList from "./mockedCatFactList.json";
import FactApp from "../components/FactApp";
import { catFactsBaseUrl, catFactsPath } from "../components/FactApp";

describe("FactApp", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("shows a spinner when loading cat facts", () => {
    nock(catFactsBaseUrl)
      .get(catFactsPath)
      .delay(2000)
      .reply(200, mockedCatFactList, {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      });

    const factApp = render(<FactApp />);

    expect(factApp.getByRole("status")).toBeTruthy();
  });

  it("shows an error when receiving an error for cat facts", async () => {
    nock(catFactsBaseUrl)
      .get(catFactsPath)
      .replyWithError("something awful happened");

    const factApp = render(<FactApp />);
    const factAppError = await factApp.findByRole(
      "alert",
      {},
      { timeout: 5000 }
    );

    expect(factAppError.textContent).toBe("Network request failed");
  });

  it("renders cat facts list", async () => {
    nock(catFactsBaseUrl).get(catFactsPath).reply(200, mockedCatFactList, {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    });

    const factApp = render(<FactApp />);
    const factAppListItem = await factApp.findAllByRole(
      "listitem",
      {},
      { timeout: 5000 }
    );

    expect(factAppListItem).toBeTruthy();
  });
});
