import React from "react";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import { Fab } from "@material-ui/core";

import { StyledConst } from "../consts/styledConst";

export type TaskType = {
    id: string;
    title: string;
    completed: boolean;
};

type State = {
    completed: boolean;
};

type TaskProps = TaskType & {
    key: string;
    // eslint-disable-next-line no-unused-vars
    deleteTask: (id: string) => void;
};

export class Task extends React.Component<TaskProps, State> {
    constructor(props: TaskProps) {
        super(props);
        this.state = {
            completed: props.completed,
        };
    }
    onChangeHandler = async () => {
        const completedBeforeClick = this.state.completed;
        this.setState({ completed: !completedBeforeClick });
        await fetch(`/tasks/${this.props.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ completed: !completedBeforeClick }),
        });
    };

    onClickHandler = async () => {
        await fetch(`/tasks/${this.props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        this.props.deleteTask(this.props.id);
    };

    render() {
        const title = this.props.title;
        return (
            <StyledDiv>
                <StyledInnerDiv>
                    <StyledInput
                        type="checkbox"
                        checked={this.state.completed}
                        onChange={this.onChangeHandler}
                    />
                    <StyledSpan>{title}</StyledSpan>
                </StyledInnerDiv>
                <Fab>
                    <DeleteIcon onClick={this.onClickHandler} />
                </Fab>
            </StyledDiv>
        );
    }
}

const StyledDiv = styled.div`
    width: 90%;
    box-sizing: border-box;
    margin: 30px 5% 30px 5%;
    border: 3px solid ${StyledConst.Common.BASE_COLOR};
    padding: ${StyledConst.Task.PADDING_SIZE};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: ${StyledConst.Task.SHADOW};
    -webkit-box-shadow: ${StyledConst.Task.SHADOW};
    -moz-box-shadow: ${StyledConst.Task.SHADOW};
`;

const StyledInnerDiv = styled.div`
    display: flex;
    align-items: center;
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
