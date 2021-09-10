import React, {Component} from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import SearchBar from "./SearchBar";




class App extends Component{
    constructor () {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
this.setState({searchfield: event.target.value })

       
    }
    render() {
        const flitterRobots = this.state.robots.filter( robots  => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
            robots.email.toLowerCase().includes(this.state.searchfield.toLowerCase())

        })
        // const flitterRobot = this.state.robots.filter( robots  => {
        //     return ;

        // })
       
        
        return (
            <div className="tc">
            <h1>Robo Friends</h1>
            <SearchBar searchChange={this.onSearchChange} />
            <Cardlist robots={flitterRobots }/>

            


            </div>
        );
    }
}

export default App;