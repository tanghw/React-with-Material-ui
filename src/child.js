import React from "react";
import "./styles.css";

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      ifLoading: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    console.log("child componentWillMount");
  }
  componentDidMount() {
    console.log("child componenDidMount");
    return fetch("./movies.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: true,
            dataSource: responseJson.movies
          },
          function() {
            console.log(this.state.dataSource[0].id);
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleClick() {
    const nickName = "from child";
    this.setState({
      name: nickName
    });
    this.props.changeName(nickName);
  }
  render() {
    console.log("child component render");
    const items =
      this.state.isLoading === true
        ? this.state.dataSource.map(item => (
            <li key={item.id}>
              {item.id}:{item.title}({item.releaseYear})
            </li>
          ))
        : null;

    return (
      <div>
        <div>
          <h1>Movies:</h1>
          <ul className="Child">{items}</ul>
        </div>
        <h1>Child Component:</h1>
        <p>ID: {this.props.id}</p>
        <p>Name(props): {this.props.name}</p>
        <p>Name(state): {this.state.name}</p>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}
