import { useState } from "react";
import { createContext } from "react";

const ModalContext = createContext({ status: false, toggle: () => {} });
const TodoContext = createContext();

const ModalProvider = (props) => {
    const [isOn, setIsOn] = useState(false);

    return (
        <ModalContext.Provider
            value={{ status: isOn, toggle: () => setIsOn(!isOn) }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};

const TodoProvider = (props) => {
    const [todos, setTodos] = useState([]);

    // add
    const addTodo = (newTodo) => {
        const id = todos.length + 1;
        const status = 0;
        const data = {
            id,
            status,
            ...newTodo,
        };
        setTodos((previous) => [...previous, data]);
    };
    // update

    const updateTodoStatus = (todoId, newStatus) => {
        // let todo = todos[todoId];
        // todo.staus = newStatus;
    };
    // delete
    const deleteTodo = (todoId) => {
        const newTodos = todos.filter((todo) => todo.id != todoId);
        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export { ModalContext, TodoContext, ModalProvider, TodoProvider };
