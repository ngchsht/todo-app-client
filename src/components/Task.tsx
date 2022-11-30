import React from "react";
import styled from "styled-components";

import { StyledConst } from "../consts/styledConst";

export type TaskType = {
    key: string;
    title: string;
    completed: boolean;
};

type State = {
    completed: boolean;
};

type TaskProps = TaskType;

export class Task extends React.Component<TaskProps, State> {
    constructor(props: TaskProps) {
        super(props);
        this.state = {
            completed: props.completed,
        };
    }

    render() {
        const title = this.props.title;
        return (
            <StyledDiv>
                <StyledInput
                    type="checkbox"
                    checked={this.state.completed}
                    onChange={() => {
                        this.setState({ completed: !this.state.completed });
                    }}
                />
                <StyledSpan>{title}</StyledSpan>
            </StyledDiv>
        );
    }
}

const StyledDiv = styled.div`
    width: 94%;
    box-sizing: border-box;
    margin: 30px 3% 30px 3%;
    border: 3px solid ${StyledConst.Common.BASE_COLOR};
    padding: ${StyledConst.Task.PADDING_SIZE};
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-shadow: ${StyledConst.Task.SHADOW};
    -webkit-box-shadow: ${StyledConst.Task.SHADOW};
    -moz-box-shadow: ${StyledConst.Task.SHADOW};
`;

const StyledInput = styled.input`
    transform: scale(2);
    box-sizing: border-box;
    margin-right: ${StyledConst.Task.INNER_MARGIN_SIZE};
    margin-left: ${StyledConst.Task.INNER_MARGIN_SIZE};
`;

const StyledSpan = styled.span`
    font-size: 32px;
    font-weight: bold;
    margin-right: ${StyledConst.Task.INNER_MARGIN_SIZE};
    margin-left: ${StyledConst.Task.INNER_MARGIN_SIZE};
`;
