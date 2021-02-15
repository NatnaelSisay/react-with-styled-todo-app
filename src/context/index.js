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
    const nextStep = (todoId) => {
        const todo = todos.find((todo) => todo.id == todoId);
        const filterOutOthers = todos.filter((todo) => todo.id !== todoId);

        if (todo) {
            // todo is not undefined
            if (todo.status < 2) {
                todo.status += 1;
            }

            const newTodos = [...filterOutOthers, todo];
            setTodos(newTodos);
        } else {
            console.error("[ERROR]Todo element doesn't have this id, ");
        }
    };
    // delete
    const deleteTodo = (todoId) => {
        const newTodos = todos.filter((todo) => todo.id != todoId);
        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, nextStep }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export { ModalContext, TodoContext, ModalProvider, TodoProvider };
