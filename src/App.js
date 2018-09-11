import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: "Joe",
          age: 18,
          occupation: "Teacher"
        },
        {
          name: "Billy",
          age: 40,
          occupation: "Dancer"
        },
        {
          name: "Lamar",
          age: 45,
          occupation: "Cowboy"
        },
        {
          name: "Doug",
          age: 30,
          occupation: "Doctor"
        },
        {
          name: "Josh",
          age: 25,
          occupation: "Lead Teacher"
        },
        {
          name: "Stacy",
          age: 23,
          occupation: "Zookeeper"
        }
      ],
      userInput: "",
      colorToggle: false
    };
  }

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  changeColor = () => {
    this.setState({ colorToggle: !this.state.colorToggle });
  };

  render() {
    console.log(this.state);
    let list = this.state.people
      .filter(person => person.occupation.includes(this.state.userInput))
      .map((person, index) => {
        return (
          <div
            key={index}
            className="person_card"
            style={{
              background: !this.state.colorToggle ? "orange" : "yellow"
            }}
          >
            <h4>{person.name}</h4>
            <p>{person.age}</p>
            <p>{person.occupation}</p>
          </div>
        );
      });
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">
            Filter By Location / Conditional Rendering
          </h2>
        </header>
        <input
          placeholder="Enter occupation"
          onChange={e => this.handleChange(e)}
        />
        <button onClick={this.changeColor}>Click to Change Color</button>
        {list}
      </div>
    );
  }
}

export default App;
