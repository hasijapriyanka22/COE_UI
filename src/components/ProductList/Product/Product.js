import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../../../context';

export default class Product extends Component {
    render() {
        const { id, title, img, price, incart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card" >
                    <div className="img-container p-5" onClick={this.props.handleDetails}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top" />
                        </Link>
                        <Link to="/cart">

                        </Link>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div``;