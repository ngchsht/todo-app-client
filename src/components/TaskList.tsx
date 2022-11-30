import React from "react";
import { Task } from "./Task";
import styled from "styled-components";
import { StyledConst } from "../consts/styledConst";

export type TaskResponse = {
    id: string;
    title: string;
    completed: boolean;
};

type State = {
    tasks: TaskResponse[];
};

export class TaskList extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            tasks: [],
        };
    }

    async componentDidMount() {
        const response: Response = await fetch("/tasks");
        const tasks: TaskResponse[] = await response.json();
        this.setState({ ...this.state, tasks });
    }

    deleteTask = (id: string) => {
        this.setState({
            ...this.state,
            tasks: this.state.tasks.filter((task) => {
                console.log(task.id !== id);
                return task.id !== id;
            }),
        });
    };

    render() {
        return (
            <StyledDiv>
                {this.state.tasks.map((value) => (
                    <Task
                        key={value.id}
                        id={value.id}
                        title={value.title}
                        completed={value.completed}
                        deleteTask={this.deleteTask}
                    />
                ))}
            </StyledDiv>
        );
    }
}

const StyledDiv = styled.div`
    width: 100%;
    padding-top: ${StyledConst.TaskList.PADDING_SIZE};
`;
