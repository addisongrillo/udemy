import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'
import './App.css';

class App extends Component {
  state = {
    text:""
  }
  handleChange = e => {
    this.setState({
      text:e.target.value
    })
  }
  handleClick = c => {
    let text = this.state.text.split('')
    text.splice(c, 1)
    this.setState({
      text:text.join('')
    })
  }
  render() {
    let text=this.state.text.split('')
    return (
      <div className="App">
        <input value={this.state.text} onChange={this.handleChange}></input>
        <p>{this.state.text.length}</p>
        <ValidationComponent length={this.state.text.length}/>
        {text.map((c, index) => 
          <div className="char" key={index} onClick={() => this.handleClick(index)}>
            <CharComponent c={c}/>
          </div>
          )}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
