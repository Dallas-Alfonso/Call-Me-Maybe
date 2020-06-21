import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList'
import CartTotals from './CartTotals';
import styled from "styled-components";

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length >0) {
                            return (
                                <TitleStyle>
                                <React.Fragment>
                                    <div className="titleBorder">
                                        
                                    <Title name="your" title="cart"/>
                                        
                                    </div>
                                    <CartColumns />
                                    <CartList value ={value}/>
                                    <CartTotals value ={value} history = {this.props.history}/>
                                </React.Fragment>
                                
                                </TitleStyle>
                            );
                        } else{
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

const TitleStyle = styled.div`
.titleBorder {
    border: 0.2rem solid rgba(0,0,0,0.2);
    border-radius: 50px;
    box-shadow: 5px 8px 20px #818181;
    padding: 10px;
    margin-bottom: 40px;
    margin-top: 20px;
   
}
`