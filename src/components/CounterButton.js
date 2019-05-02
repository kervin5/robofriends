import React, {Component} from 'react'

class CounterButton extends Component {

    state =  {
        count: 0
    };


    //Prevents child component from updating even if parent updates
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.count !== nextState.count;
    }

    updateCount = () => {
        this.setState(prevState =>{
            return { ...prevState, count: prevState.count + 1 }
        });
    };

    render() {
        return <button color={this.props.color} onClick={this.updateCount}> Count: {this.state.count}</button>
    }
}

export default CounterButton;