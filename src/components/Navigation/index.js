import React, { useContext } from "react";
import { Nav, Header, Button } from "../CustomStyledElements";

import { ModalContext } from "../../context";
const Navigation = (props) => {
    const { toggle } = useContext(ModalContext);
    // console.log(value);
    return (
        <div>
            <Nav>
                <Header className="header">Todo Application</Header>
                <Button className="addTodo" onClick={() => toggle()}>
                    +Add Todo
                </Button>
            </Nav>
        </div>
    );
};

export default Navigation;
