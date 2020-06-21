import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import styled from "styled-components";

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <TitleStyle>
                            <div className="titleBorder">
                        <Title name="Call Me" title="Maybe" />
                            </div>
                        </TitleStyle>
                        <div className="row">
                        <ProductConsumer>
                            {value =>{
                                return value.products.map( product =>{
                                    return <Product key={product.id} product=
                                    {product} />;
                                });
                            }}
                        </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
             //   <Product />
            
        );
    }
}

const TitleStyle = styled.div`
.titleBorder {
    border: 0.2rem solid rgba(0,0,0,0.2);
    border-radius: 50px;
    box-shadow: 5px 8px 20px #818181;
    padding: 10px;
    margin-bottom: 20px;
}
`
