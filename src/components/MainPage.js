import React, {Component} from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll';
import ErrorBoundry from '../hoc/ErrorBoundry';
import Header from './Header';

class MainPage extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {

            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    };

    render() {
        const { onSearchChange, isPending} = this.props;
        

        if (isPending) {
            return <h1>Loading</h1>;
        } else {
            return (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots()}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>

            );
        }

    }
}

export default MainPage;
