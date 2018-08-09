import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent.js";
import CharComponent from "./CharComponent.js";

class App extends Component {

  state = {
    word: ""
  };



  somethingChangedHandler = (event) => {
    this.setState(
      {
        word: event.target.value
      }
    )
  }


  deleteCharHandler = (index) =>{
    const text = this.state.word.split("");
    text.splice(index,1); //removes one char from array
    const updatedText = text.join(''); //convert word of character into text 
    this.setState({word: updatedText});
  }
  
  
  render() {

    //map every element in the array into a new element
    const charList = this.state.word.split('').map( (ch, index) => {
      return (
      <CharComponent 
      character = {ch}
      key = {index}
      clicked = {() => this.deleteCharHandler(index)}
       />
      )
        });
    
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

         <input type = "text" onChange = {this.somethingChangedHandler} value = {this.state.word}/> how long is the text below 
        <p>{this.state.word}</p> 
         <ValidationComponent word = {this.state.word}/>
         {charList}
         
      </div>
    );
  }
}

export default App;
