import React from "react";
import styled, { css } from "styled-components";
import { Home } from "@styled-icons/entypo/Home";
import { PencilAlt } from "@styled-icons/heroicons-solid/PencilAlt";

import { StyledConst } from "../consts/styledConst";

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

const StyledDiv = styled.div`
    padding-left: ${StyledConst.Header.PADDING_SIZE};
`;

const StyledInnerDiv = styled.div`
    padding-top: ${StyledConst.Header.PADDING_SIZE};
    padding-bottom: ${StyledConst.Header.PADDING_SIZE};
`;

const StyledA = styled.a`
    color: ${StyledConst.Header.LINK_COLOR};
    font-size: ${StyledConst.Header.LINK_SIZE};
`;

const StyledSpan = styled.span`
    vertical-align: middle;
`;

const BaseIconCSS = css`
    color: ${StyledConst.Header.LINK_COLOR};
    width: ${StyledConst.Header.LINK_SIZE};
    height: ${StyledConst.Header.LINK_SIZE};
    padding-right: ${StyledConst.Header.PADDING_SIZE_BETWEEN_ICON_AND_TEXT};
    vertical-align: middle;
`;

const StyledHomeIcon = styled(Home)`
    ${BaseIconCSS}
`;

const StyledPencilAltIcon = styled(PencilAlt)`
    ${BaseIconCSS}
`;
