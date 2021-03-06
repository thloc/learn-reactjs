import React, { Component } from 'react';

import Aux from '../../hoc/_Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevStage) => {
            return  {showSideDrawer: !prevStage.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={ this.sideDrawerToggleHandler }/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={ this.sideDrawerClosedHandler }/>
                <main className="Content">
                    { this.props.children }
                </main>
            </Aux>
        );
    }
}

export default Layout;
