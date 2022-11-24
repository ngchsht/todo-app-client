import React from "react";
import { Task } from "./Task";

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
        const response: Response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const tasks: TaskResponse[] = await response.json();
        this.setState({ ...this.state, tasks });
    }

    render() {
        return (
            <ul>
                {this.state.tasks.map((value) => (
                    <Task
                        key={value.id}
                        title={value.title}
                        completed={value.completed}
                    />
                ))}
            </ul>
        );
    }
}
