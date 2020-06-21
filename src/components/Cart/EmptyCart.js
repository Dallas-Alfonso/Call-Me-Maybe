import React from 'react'
import styled from "styled-components";

export default function EmptyCart() {
    return(
        <div className = "container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center
                text-title">
                    <TitleStyle>
                    <h1 className="titleBorder">your cart is empty</h1>
                    </TitleStyle>
                </div>
            </div>
        </div>
    )
}

const TitleStyle = styled.h1`
.titleBorder {
    border: 0.2rem solid rgba(0,0,0,0.2);
    border-radius: 50px;
    box-shadow: 5px 8px 20px #818181;
    padding: 20px;
    margin-top:-20px;
}
`