import React, { Component } from 'react';

class ToDo extends Component {
  constructor(props) {
    super(props);
  }


deleteTodo(description) {
  this.props.deleteTodo(description);
}
  render() {
    return (
      <div className="wrapper">

      <button className="deleteTodo" onClick = {(e) => this.deleteTodo(this.props.description)}>Delete</button> {this.props.deleteTodo}

      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
      </li>
      </div>
    );
  }
}

export default ToDo;
