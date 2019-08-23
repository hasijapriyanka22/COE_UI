import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Cart extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                   <h1> in cart </h1>
                </Link>
            </div>
        )
    }
}
