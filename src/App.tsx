import React from "react";
import styled from "styled-components";

import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <HeaderDiv>
        <Header />
      </HeaderDiv>
      <ContentDiv />
    </div>
  );
}

export default App;

const HeaderDiv = styled.div`
  width: 300px;
  height: 1000px;
  box-sizing: border-box;
  border-right: 2px solid #e6e6e6;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
