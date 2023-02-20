import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

class App extends Component {
  state = {
    persons: []
  };

  async componentDidMount() {
    const response = await fetch('/api/v1/person');
    const body = await response.json();
    this.setState({persons: body});
  }

  render() {
    const {persons} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Persons</h2>
            {persons.map(person => 
              <div key={person.id}>
                ID: {person.id} // Name: {person.name}
              </div>
            )}
          </div>
        </header>
      </div>
    )
  }
}

export default App;