import React, {Component} from 'react';
import './App.css';
import { render } from 'react-dom';

class Subject extends Component {
  render(){
    return (
    <header>
      <h1>Hello Web</h1>
      Hello Component test !v 
    </header>

    );
  }  
}

class App extends Component {
  render(){
    return (
      <div className="App">
      <Subject></Subject>
      </div>
    );
  }  
}

export default App;
