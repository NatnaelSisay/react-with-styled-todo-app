import Navigation from "../Navigation";
import CardsContainer from "../CardsContainer.js";

import Modal from "../Modal";

import { ModalProvider, TodoProvider } from "../../context";

function App() {
    return (
        <div className="App">
            <TodoProvider>
                <ModalProvider>
                    <Navigation />

                    <CardsContainer />
                    <Modal />
                </ModalProvider>
            </TodoProvider>
        </div>
    );
}

export default App;
