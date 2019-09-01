import React, { Component } from 'react';

import './Modal.css';
import Aux from '../../../../hoc/_Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate () {
        console.log('upass2');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100hv)',
                        opacity: this.props.show ? '1' : '0',
                        zIndex: this.props.show ? '' : '-1'
                    }}
                    className="Modal">
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;
