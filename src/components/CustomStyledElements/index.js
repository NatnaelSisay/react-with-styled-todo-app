import styled, { css } from "styled-components";

const COLOR = {
    blue: "rgb(10, 132, 255)",
    pink: "rgb(255, 45, 85)",
    buttonBackground: "#ff850a",
    red: "rgb(255, 69, 58)",
    yellow: "rgb(255, 159, 10)",
    green: "rgb(48, 209, 88)",
    lightgray: "rgb(99, 99, 102)",
};

const Header = styled.h1`
    color: ${(props) => props.color || "black"};
    background-color: ${(props) => COLOR[props.background]};
    text-align: ${(props) => props.textAlign};
    padding: 0.5rem 1rem;
    margin: 0px;
    font-family: "Roboto Slab", san-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.5rem;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: ${COLOR.blue};

    h1 {
        color: white;
    }
`;

const Button = styled.button`
    border: none;
    padding: 1rem 1rem;

    background-color: ${COLOR.buttonBackground};
    color: white;
    font-family: "Roboto Slab";
    font-weight: 800;
    &:hover {
        background-color: red;
    }
`;

const TodoContainer = styled.div`
    min-width: 30%;
    margin: 1rem;
    padding: 0rem 0rem;
    border-radius: 50px 50px 0px 0px;
    overflow: hidden;
    position: relative;
    background-color: ${COLOR.lightgray};

    height: 80vh;
    display: flex;
    flex-direction: column;

    box-shadow: 0 15px 14px rgba(33, 33, 33, 0.9);
    div {
        overflow: scroll;
    }

    h1 {
        font-size: 16px;
        padding: 1rem;
    }

    button {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`;
const ChildrenContainer = styled.div`
    padding-bottom: 2.5rem;
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonContainer = styled.div`
    display: none;
`;

const ElementHeader = styled.div`
    position: relative;
    padding: 1rem 1rem;
    height: 1.5rem;
    /* border: 1px solid black; */
    border-radius: 0px 10px 10px 0px;
    overflow: hidden;
`;

const ElementContainer = styled.div`
    position: relative;
    margin: 1rem;
    border-radius: 0px 10px 10px 0px;
    background-color: white;
    box-shadow: 0 0 20px black;
    &:hover ${ButtonContainer} {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;

        button {
            border: none;
            padding: 0.2rem 1rem;
            height: 100%;
            color: white;
            font-weight: bold;
            background-color: ${COLOR.red};
        }

        button:first-child {
            background-color: ${COLOR.green};
        }
    }
`;

export {
    Header,
    Nav,
    Button,
    TodoContainer,
    ChildrenContainer,
    MainContainer,
    ElementContainer,
    ElementHeader,
    ButtonContainer,
};
