import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Snackbar } from "@material-ui/core";
import { TaskResponse } from "./TaskList";

export const NewTask: React.FC = () => {
    const textRef = useRef<HTMLInputElement>(null!);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const onClickHandler = async (
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        e.preventDefault();
        const response = await fetch("/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: textRef.current.value }),
        });
        if (response.ok) {
            const task: TaskResponse = await response.json();
            setMessage(`${task.title} is created`);
            textRef.current.value = "";
        } else {
            setMessage("failed");
        }
        setIsOpen(true);
    };

    return (
        <StyledDiv>
            {message}
            <form>
                <StyledLabel>TITLE</StyledLabel>
                <StyledInput type={"text"} required={true} ref={textRef} />
                <StyledButton onClick={onClickHandler}>Send</StyledButton>
            </form>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                ContentProps={{
                    "aria-describedby": "message-id",
                }}
                message={<span id="message-id">{message}</span>}
            />
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    padding: 40px;
`;

const StyledLabel = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
`;

const StyledInput = styled.input`
    display: block;
    font-size: 30px;
    height: 60px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    &:focus {
        outline: 0;
    }
`;

const StyledButton = styled.button`
    margin-top: 15px;
    padding: 15px 20px 15px 20px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    background: #29cf96;
    color: white;
    cursor: pointer;
`;
