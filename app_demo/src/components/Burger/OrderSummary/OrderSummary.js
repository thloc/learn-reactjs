import React, { Component } from 'react';

import Aux from '../../../hoc/_Aux';
import Button from '../../Layout/UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('Update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={ igKey }>
                    <span style={{ textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    { ingredientSummary }
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)} </strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary;
