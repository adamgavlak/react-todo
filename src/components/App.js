import React, { Component } from 'react';
import TodosList from './TodosList';
import TodoForm from './TodoForm';

const todos = [
  {
    task: 'Make React tutorial',
    isComplete: false
  },
  {
    task: 'Eat dinner',
    isComplete: true
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todos };
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isComplete: false
    })
    this.setState({ todos: this.state.todos })
  }

  deleteTask(task) {
    const todo = this.state.todos.find(item => { return item.task === task; })
    this.state.todos.splice(this.state.todos.indexOf(todo), 1);
    this.setState({ todos: this.state.todos });
  }

  toggleTask(task) {
    const todo = this.state.todos.find(item => { return item.task === task})
    todo.isComplete = !todo.isComplete;
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div>
        <h1>React ToDo App</h1>
        <TodoForm createTask={this.createTask.bind(this)} />
        <TodosList todos={this.state.todos} toggleTask={this.toggleTask.bind(this)} deleteTask={this.deleteTask.bind(this)} />
      </div>
    );
  }
}

export default App;
