import React, {Component} from 'react'
import CounterButton from './CounterButton';

class Header extends Component {
    //Doesn't affect render of child compoents if props or state change
    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }

    render() {
        return (
            <React.Fragment>
                <CounterButton color="red" />
                <h1 className='f1'>ROBOFRIENDS</h1>
            </React.Fragment>
        );
    }
}

export default Header;