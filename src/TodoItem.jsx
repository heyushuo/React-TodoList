import React, { Component } from 'react';

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <div> {this.props.content} </div>
      </div>
    );
  }
}

export default TodoItem;
