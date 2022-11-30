import React from "react";
import styled, { css } from "styled-components";
import { Home } from "@styled-icons/entypo/Home";
import { PencilAlt } from "@styled-icons/heroicons-solid/PencilAlt";

import { StyledConst } from "../consts/styledConst";
import { Link } from "react-router-dom";

export class Header extends React.Component<{}, {}> {
    render() {
        return (
            <StyledDiv>
                <StyledInnerDiv>
                    <h1>Todo App</h1>
                </StyledInnerDiv>
                <StyledInnerDiv>
                    <StyledLink to={"/"}>
                        <StyledHomeIcon />
                        <StyledSpan>Home</StyledSpan>
                    </StyledLink>
                </StyledInnerDiv>
                <StyledInnerDiv>
                    <StyledLink to={"/newtask"}>
                        <StyledPencilAltIcon />
                        <StyledSpan>New Task</StyledSpan>
                    </StyledLink>
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

const StyledLink = styled(Link)`
    color: ${StyledConst.Header.LINK_COLOR};
    font-size: ${StyledConst.Header.LINK_SIZE};
    text-decoration: none;
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
