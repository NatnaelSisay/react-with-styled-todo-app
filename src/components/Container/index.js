import React, { useContext } from "react";
import {
    Header,
    Button,
    TodoContainer,
    ChildrenContainer,
} from "../CustomStyledElements";

import { ModalContext } from "../../context";

function Container({ header, color = "green", hasButton = false, children }) {
    const { toggle } = useContext(ModalContext);
    return (
        <TodoContainer color={color}>
            <Header background={color} textAlign={"center"} className="header">
                {header ? header : "Welcome"}
            </Header>
            <ChildrenContainer>{children}</ChildrenContainer>
            {hasButton && (
                <Button className="button" onClick={() => toggle()}>
                    + Add Todo
                </Button>
            )}
        </TodoContainer>
    );
}

export default Container;
