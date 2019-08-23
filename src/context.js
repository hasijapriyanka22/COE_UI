import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();

export default class ProductProvider extends Component {
    state={
        products: storeProducts,
        detailProducts: detailProduct,
    }
    handleDetails = () =>{
        console.log('hello form details');
    }
    addToCart = () =>{

    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetails,
                addToCart: this.addToCart
            }}> 
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer, ProductProvider};