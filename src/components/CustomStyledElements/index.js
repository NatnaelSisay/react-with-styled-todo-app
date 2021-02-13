import styled from "styled-components";

const Header = styled.h1`
    color: ${(props) => props.color || "black"};
    background-color: ${(props) => props.background};
    text-align: ${(props) => props.textAlign};
    padding: 0.5rem 1rem;
    margin: 0px;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 2px solid black;
`;

const Button = styled.button`
    border: none;
    padding: 1rem 1rem;
    // border-radius: 10px;
    &:hover {
        background-color: red;
    }
`;

const TodoContainer = styled.div`
    min-width: 30%;
    margin: 1rem;
    padding: 0rem 0rem;
    border-radius: 50px 50px 0px 0px;
    overflow: scroll;

    height: 80vh;
    display: flex;
    flex-direction: column;
    /* align-items: space-between; */

    box-shadow: 0px 20px 40px ${(props) => props.color || "green"};

    .button {
    }
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export { Header, Nav, Button, TodoContainer, MainContainer };
