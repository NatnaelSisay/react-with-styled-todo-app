import styled from "styled-components";

const Header = styled.h1`
    color: green;
`;

Header.displayName = "header";

function App() {
    return (
        <div className="App">
            <Header className="header">Todo</Header>
        </div>
    );
}

export default App;
