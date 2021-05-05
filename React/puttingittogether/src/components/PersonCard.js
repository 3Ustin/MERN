import React, { Component } from 'react';

class PersonCard extends Component{
    // this method goes inside of the LightSwitch Component
    constructor(props){
        super(props);
        this.state = {
            click: props.age
        };
    }
    addToAge = () => {
        this.setState({click: this.state.click + 1});
    }
v    
    render(){
        return(
            <div>
                <h1>{this.props.lastName},{this.props.firstName}</h1>
                <p>Hair Color: {this.props.hairColor}</p>
                <p>Age: {this.state.click}</p>
                <button onClick={this.addToAge}>Press when Birthday day is near</button>
            </div>
        )
    }
}
export default PersonCard;