import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangeHandler = (value) => {
        this.setState((prevState) => {
            return { counter: prevState.counter + value }
        });
    }

    render() {
        return (
            <div>
                <div>Stage: { this.state.counter } </div>
                <div>Redux: { this.props.ctr } </div>
                <button onClick={() => this.counterChangeHandler(Math.floor((Math.random() * 10) + 1))}>ADD</button>
                <button onClick={this.props.onIcrementCounter}>Redux</button>
                <button onClick={this.props.onRandomCounter}>Random (Redux)</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIcrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onRandomCounter: () => dispatch({ type: 'RANDOM', val: Math.floor((Math.random() * 10) + 1) })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);