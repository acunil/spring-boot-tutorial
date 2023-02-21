import './App.css';
import React, {Component} from "react";
import PersonTable from "./PersonTable.js";

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
          <PersonTable arrayInput={persons}/>
        </header>
      </div>
    )
  }
}

export default App;