import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Card from './components/Card';
import {connect} from "react-redux";
import CardList from './components/CardList';
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll';
import ErrorBoundry from './hoc/ErrorBoundry.js';
import Header from './components/Header';


import { setSearchField, requestRobots} from "./actions";

class App extends Component {
    // state = {
    //     robots: []
    // };

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(users => {
        //         this.setState({robots: users})
        //     });

        // this.setState({robots: robots});
        this.props.onRequestRobots();
    }

    render() {
        // const {robots} = this.state;
        const {searchField, onSearchChange, robots, isPending} = this.props;
        console.log(searchField);

        const filteredRobots = robots.filter(robot => {

            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if (isPending) {
            return <h1>Loading</h1>;
        } else {
            return (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>

            );
        }

    }
}

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

const mapDispatchToProps = dispatch => {
  return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobots: () => dispatch(requestRobots())
  }
};

export default  connect(mapStateToProps, mapDispatchToProps)(App);
