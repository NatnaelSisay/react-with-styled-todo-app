import React from "react";

import { Header } from "../CustomStyledElements";
import styled from "styled-components";
const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InnerContainer = styled.div`
    width: 50%;
    height: 50%;
    overflow: hidden;
    background-color: white;
`;

const ModalHeader = styled.h1`
    background-color: rgb(10, 132, 255);
    color: white;
    margin: 0px;
    margin-bottom: 1rem;
    padding: 1rem;
    text-align: center;
    width: 100%;
`;

const DataSection = styled.div`
    margin: 1rem;
    height: 70%;
`;

const InputSection = styled.div`
    display: flex;
    flex-direction: column;

    input {
        /* width: 100%; */
        padding: 1rem 0.5rem;
        font-size: 18px;
        font-weight: bold;
        color: red;
        font-family: "Roboto Slab", sans-serif;
        margin-bottom: 1rem;
    }

    textarea {
        padding: 1rem 0.5rem;
        font-size: 16px;
        font-weight: lighter;
        color: black;
        font-family: "Roboto Slab", sans-serif;
        margin-bottom: 1rem;
    }
`;
const ModalButtons = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        border: none;
        padding: 1rem;
        font-size: 18px;
        color: white;

        background-color: rgb(48, 209, 88);
    }

    button:first-child {
        background-color: rgb(255, 69, 58);
    }
`;

function Modal(props) {
    return (
        <ModalContainer>
            <InnerContainer>
                <ModalHeader className="header">Add Todo</ModalHeader>
                <DataSection>
                    <InputSection>
                        <input
                            placeholder="Do .... "
                            className="inputField"
                            type="text"
                        />
                        <textarea
                            placeholder="Detail ..."
                            rows="4"
                            className="textArea"
                        ></textarea>
                    </InputSection>

                    <ModalButtons>
                        <button>Cancel</button>
                        <button>Add</button>
                    </ModalButtons>
                </DataSection>
            </InnerContainer>
        </ModalContainer>
    );
}

export default Modal;
