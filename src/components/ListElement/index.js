import React, { useState } from "react";
import styled from "styled-components";
import {
    ElementContainer,
    ButtonContainer,
    ElementHeader,
} from "../CustomStyledElements";

function ListElement(props) {
    const { text, detail } = props;
    const [showDetail, setShowDetail] = useState(false);

    return (
        <>
            <ElementContainer className="container">
                <ElementHeader>
                    <div
                        className="content"
                        onClick={() => setShowDetail(!showDetail)}
                    >
                        {text}
                    </div>
                    <ButtonContainer className="buttons">
                        <button>Next</button>
                        <button>Remove</button>
                    </ButtonContainer>
                </ElementHeader>

                {showDetail && <div className="detail">{"detail"}</div>}
            </ElementContainer>
        </>
    );
}

export default ListElement;
