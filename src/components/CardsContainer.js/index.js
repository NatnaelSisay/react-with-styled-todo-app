import React from "react";
import { MainContainer } from "../CustomStyledElements";
import Container from "../Container";
import ListElement from "../ListElement";
function CardsContainer(props) {
    return (
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
    );
}

export default CardsContainer;
