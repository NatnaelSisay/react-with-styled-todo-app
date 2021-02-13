import styled from "styled-components";

import { Nav, Header, Button, MainContainer } from "../CustomStyledElements";
import Container from "../Container";
import ListElement from "../ListElement";
function App() {
    return (
        <div className="App">
            <Nav>
                <Header className="header">Todo Application</Header>
                <Button className="addTodo">+Add Todo</Button>
            </Nav>

            <MainContainer>
                <Container header={"Todos"} color="red" hasButton={true}>
                    <ListElement text="check" />
                    <ListElement text="check" />
                    <ListElement text="check" />
                    <ListElement text="check" />
                    <ListElement text="check" />
                    <ListElement text="check" />
                    <ListElement text="check" />
                    <ListElement text="check" />
                    <ListElement text="check" />
                </Container>
                <Container header={"On Progress"} color="yellow" />
                <Container header={"Completed"} />
            </MainContainer>
        </div>
    );
}

export default App;
