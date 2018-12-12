import React from "react";
import ReactDOM from "react-dom";
import Child from "./child";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "parent self"
    };
  }
  handleChangeName(nickName) {
    this.setState({
      name: nickName
    });
  }
  render() {
    console.log("parent component render");
    return (
      <div>
        <div className="App">
          <h1>Parent component:</h1>
          <p>Name(state): {this.state.name}</p>
        </div>
        <Child
          id={1234567890}
          name={this.state.name}
          changeName={val => this.handleChangeName(val)}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
