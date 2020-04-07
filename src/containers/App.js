import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import SearchBox2 from '../components/SearchBox2';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, setConsoleLog, requestRobots } from '../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        changeLog : state.searchRobots.changeLog,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
    setConsole : (event) => dispatch(setConsoleLog(event.target.value)),
    onRequestRobots : () => dispatch(requestRobots())
    }
}



class App extends Component{
   
   componentDidMount(){
       this.props.onRequestRobots()
       
   }


    render(){
        const {searchField, onSearchChange, changeLog, setConsole, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
          
        })
        console.log(changeLog)
        
    return isPending ? true : (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <Cardlist
                robots={filteredRobots} />
                
                
            </Scroll>
            <SearchBox2 searchChange2={setConsole}/>
            
        </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

