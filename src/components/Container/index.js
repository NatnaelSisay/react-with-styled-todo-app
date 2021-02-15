import React from "react";
import { Header, Button, TodoContainer } from "../CustomStyledElements";

import styled from "styled-components";
const ChildrenContainer = styled.div`
    padding-bottom: 2.5rem;
`;

function Container({ header, color = "green", hasButton = false, children }) {
    return (
        <TodoContainer color={color}>
            <Header background={color} textAlign={"center"} className="header">
                {header ? header : "Welcome"}
            </Header>
            <ChildrenContainer>{children}</ChildrenContainer>
            {hasButton && <Button className="button">+ Add Todo</Button>}
        </TodoContainer>
    );
}

export default Container;
