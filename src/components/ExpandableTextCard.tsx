import React, { useState } from "react";

import styled from "styled-components";
import Card from "react-bootstrap/Card";

const ExpandableTextCardText = styled.span`
  ${(props: { "aria-expanded": boolean }) =>
    !props["aria-expanded"] &&
    `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  `}
  cursor: pointer;
`;

type ExpandableTextCardProps = {
  children: string;
};

const ExpandableTextCard: React.FunctionComponent<ExpandableTextCardProps> = (
  props: ExpandableTextCardProps
) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Card bg="dark" text="light">
      <Card.Body>
        <ExpandableTextCardText
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {props.children}
        </ExpandableTextCardText>
      </Card.Body>
    </Card>
  );
};

export default ExpandableTextCard;
