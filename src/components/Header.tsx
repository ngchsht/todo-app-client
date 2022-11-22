import React from "react";
import styled, { css } from "styled-components";
import { Home } from "@styled-icons/entypo/Home";
import { PencilAlt } from "@styled-icons/heroicons-solid/PencilAlt";

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <StyledDiv>
        <StyledInnerDiv>
          <h1>Todo App</h1>
        </StyledInnerDiv>
        <StyledInnerDiv>
          <StyledA>
            <StyledHomeIcon />
            <StyledSpan>Home</StyledSpan>
          </StyledA>
        </StyledInnerDiv>
        <StyledInnerDiv>
          <StyledA>
            <StyledPencilAltIcon />
            <StyledSpan>New Task</StyledSpan>
          </StyledA>
        </StyledInnerDiv>
      </StyledDiv>
    );
  }
}

const PADDING_SIZE: string = "30px";
const PADDING_SIZE_BETWEEN_ICON_AND_TEXT: string = "20px";
const LINK_COLOR: string = "gray";
const LINK_SIZE: string = "24px";

const StyledDiv = styled.div`
  padding-left: ${PADDING_SIZE};
`;

const StyledInnerDiv = styled.div`
  padding-top: ${PADDING_SIZE};
  padding-bottom: ${PADDING_SIZE};
`;

const StyledA = styled.a`
  color: ${LINK_COLOR};
  font-size: ${LINK_SIZE};
`;

const StyledSpan = styled.span`
  vertical-align: middle;
`;

const BaseIconCSS = css`
  color: ${LINK_COLOR};
  width: ${LINK_SIZE};
  height: ${LINK_SIZE};
  padding-right: ${PADDING_SIZE_BETWEEN_ICON_AND_TEXT};
  vertical-align: middle;
`;

const StyledHomeIcon = styled(Home)`
  ${BaseIconCSS}
`;

const StyledPencilAltIcon = styled(PencilAlt)`
  ${BaseIconCSS}
`;
