import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import FactApp from "./components/FactApp";
const CentralizedApp = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: calc(10px + 2vmin);
  color: white;
`;

function App(): React.ReactElement {
  return (
    <CentralizedApp>
      <AppHeader>
        <FactApp />
      </AppHeader>
    </CentralizedApp>
  );
}

export default App;
