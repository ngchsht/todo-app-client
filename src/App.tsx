import React from "react";
import styled from "styled-components";

import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { StyledConst } from "./consts/styledConst";

function App() {
    return (
        <OuterDiv>
            <HeaderDiv>
                <Header />
            </HeaderDiv>
            <ContentDiv>
                <TaskList />
            </ContentDiv>
        </OuterDiv>
    );
}

export default App;

const OuterDiv = styled.div`
    display: flex;
`;

const HeaderDiv = styled.div`
    width: 300px;
    height: 1000px;
    box-sizing: border-box;
    border-right: 2px solid ${StyledConst.Common.BASE_COLOR};
`;

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
