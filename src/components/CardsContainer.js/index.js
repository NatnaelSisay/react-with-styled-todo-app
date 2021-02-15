import React, { useContext } from "react";
import { MainContainer } from "../CustomStyledElements";
import Container from "../Container";
import ListElement from "../ListElement";

import { TodoContext } from "../../context";

function CardsContainer(props) {
    const { todos, addTodo, deleteTodo } = useContext(TodoContext);
    const onTodo = todos.filter((todo) => todo.status === 0);
    const onProgress = todos.filter((todo) => todo.status === 1);
    const onCompleted = todos.filter((todo) => todo.status === 2);

    console.log("Cards container => ", todos);
    return (
        <MainContainer>
            <Container header={"Todos"} color="red" hasButton={true}>
                {onTodo.map((todo) => {
                    return (
                        <ListElement
                            key={todo.id}
                            todo={todo}
                            remove={() => deleteTodo(todo.id)}
                        />
                    );
                })}
            </Container>
            <Container header={"On Progress"} color="yellow">
                {onProgress.map((todo) => {
                    return (
                        <ListElement
                            key={todo.id}
                            todo={todo}
                            remove={() => deleteTodo(todo.id)}
                        />
                    );
                })}
            </Container>
            <Container header={"Completed"}>
                {onCompleted.map((todo) => {
                    return (
                        <ListElement
                            key={todo.id}
                            todo={todo}
                            remove={() => deleteTodo(todo.id)}
                        />
                    );
                })}
            </Container>
        </MainContainer>
    );
}

export default CardsContainer;
