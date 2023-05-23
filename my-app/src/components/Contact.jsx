import React from 'react';
import { Prompt } from "react-router-dom";

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ""};
    }
    handleChange(event){
        this.setState({ value: event.target.value });
    }
    handleSubmit(){
        this.setState({ value: "" });
    }
    render(){
        var style1 = {
            width: 300,
            height: 150,
            margin: 10
        };
        var style2 = {
            width: 300,
            margin: 10
        }
        return (
            <div>
                <h2>Send me a silly message!</h2>
                <input type="text" name="inputName" value={this.state.inputName} onChange={this.handleChange.bind(this)} style={style2} placeholder='Full Name'/>
                <br />
                <input type="text" name="emailInput" value={this.state.emailInput} onChange={this.handleChange.bind(this)} style={style2} placeholder='Email'/>
                <br />
                <textarea type="text" name="textAreaName" value={this.state.textAreaName} onChange={this.handleChange.bind(this)} style={style1} placeholder='Send me a message!!!' />
                <div>
                    <button onClick={this.handleSubmit.bind(this)}>Send</button>
                </div>
                <Prompt when={this.state.value !==""} message="Are you sure you don't wanna send me a message? :(" />
            </div>
        );
    }
}

export default Contact;