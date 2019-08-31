import React from 'react';

import './Modal.css';
import Aux from '../../../../hoc/_Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100hv)',
                opacity: props.show ? '1' : '0'
            }}
            className="Modal">
            {props.children}
        </div>
    </Aux>
);

export default modal;
