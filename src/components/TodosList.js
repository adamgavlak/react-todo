import React, { Component } from 'react';
import Todo from './Todo';

class TodosList extends Component {
  renderItems() {
    return this.props.todos.map((todo, index) =>
      <Todo key={index} {...todo} toggleTask={this.props.toggleTask} deleteTask={this.props.deleteTask}/>);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

export default TodosList;
