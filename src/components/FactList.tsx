import React from "react";

import { sampleSize } from "lodash";
import styled from "styled-components";

import ExpandableTextCard from "./ExpandableTextCard";

const StyledFactList = styled.ul`
  width: 75%;
  list-style: none;
  padding: 0;
`;

type FactListProps = {
  facts: string[];
  maxFacts: number;
};

const FactList: React.FunctionComponent<FactListProps> = (
  props: FactListProps
) => {
  const renderFacts = (): React.ReactElement[] | undefined => {
    return sampleSize(props.facts, props.maxFacts).map((fact, index) => (
      <li key={index}>
        <ExpandableTextCard>{fact}</ExpandableTextCard>
      </li>
    ));
  };

  return <StyledFactList>{renderFacts()}</StyledFactList>;
};

export default FactList;
