import React from "react";

import { shuffle } from "lodash";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import useAsyncState from "../lib/useAsyncState";
import FactList from "./FactList";

export const catFactsBaseUrl = "https://cat-fact.herokuapp.com";
export const catFactsPath = "/facts?animal_type=cat";

const catFactsUrl = catFactsBaseUrl.concat(catFactsPath);

const ButtonWithMargin = styled(Button)`
  margin: 20px 0;
`;

type CatFactResponse = {
  all: {
    _id: string;
    text: string;
  }[];
};

const FactApp: React.FunctionComponent = () => {
  const [catFacts, setCatFacts, loadingCatFacts, catFactError] = useAsyncState<
    CatFactResponse
  >(catFactsUrl, {}, undefined);

  const randomizeCatFacts = (): void => {
    if (catFacts) setCatFacts({ all: shuffle(catFacts.all) });
  };

  const factIsAboutCats = (fact: string): boolean => {
    return fact.includes("cat");
  };

  return (
    <>
      <ButtonWithMargin onClick={randomizeCatFacts}>
        Give me more cat facts!
      </ButtonWithMargin>

      {loadingCatFacts && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      {catFactError && <span role="alert">{catFactError.message}</span>}

      {catFacts && (
        <FactList
          facts={catFacts.all
            .map((catFact) => catFact.text)
            .filter(factIsAboutCats)}
          maxFacts={5}
        />
      )}
    </>
  );
};

export default FactApp;
