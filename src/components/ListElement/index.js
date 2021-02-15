import React, { useState } from "react";
import styled from "styled-components";
import {
    ElementContainer,
    ButtonContainer,
    ElementHeader,
} from "../CustomStyledElements";

const Detail = styled.div`
    margin: 0rem 1rem;
    margin-bottom: 0.5rem;
    color: gray;
    font-size: 14px;
`;

const DetailIndicator = styled.span`
    font-size: 12px;
    color: gray;
    font-weight: bold;
`;

function ListElement(props) {
    const { todo, remove } = props;
    console.log(props);
    const [showDetail, setShowDetail] = useState(false);

    if (todo.length == 0) return null;
    return (
        <>
            <ElementContainer className="container">
                <ElementHeader>
                    <div
                        className="content"
                        onClick={() => setShowDetail(!showDetail)}
                    >
                        {todo.detail && (
                            <DetailIndicator>{"> "}</DetailIndicator>
                        )}{" "}
                        {todo.title}
                    </div>
                    <ButtonContainer className="buttons">
                        <button>Next</button>
                        <button onClick={() => remove()}>Remove</button>
                    </ButtonContainer>
                </ElementHeader>

                {showDetail && (
                    <Detail className="detail">{todo.detail}</Detail>
                )}
            </ElementContainer>
        </>
    );
}

export default ListElement;
