import React from "react";

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
            <li>
                <input
                    type="checkbox"
                    checked={this.state.completed}
                    onChange={() => {
                        this.setState({ completed: !this.state.completed });
                    }}
                />
                {title}
            </li>
        );
    }
}
