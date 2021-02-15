import { MainContainer } from "../CustomStyledElements";

import Navigation from "../Navigation";
import Container from "../Container";
import ListElement from "../ListElement";
import Modal from "../Modal";

import { ModalProvider, TodoProvider } from "../../context";

function App() {
    return (
        <div className="App">
            <TodoProvider>
                <ModalProvider>
                    <Navigation />

                    <MainContainer>
                        <Container
                            header={"Todos"}
                            color="red"
                            hasButton={true}
                        >
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
                    <Modal />
                </ModalProvider>
            </TodoProvider>
        </div>
    );
}

export default App;
