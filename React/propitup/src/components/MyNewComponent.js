import React, { Component } from 'react';

class MyNewComponent extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.lastName},{this.props.firstName}</h1>
                <p>Hair Color: {this.props.hairColor}</p>
                <p>Age: {this.props.age}</p>
            </div>
        )
    }
}
export default MyNewComponent;