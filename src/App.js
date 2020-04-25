import React from 'react';
import './App.css';
import TodoItems from './components/TodoItems'
import keyIndex from 'react-key-index'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      toDosList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const text = this.text.value
    const completed = false
    const info = {text: text, completed: completed}
    this.setState(prevState => ({
      toDosList: [...prevState.toDosList, info]
    }))
    this.text.value = ""
  }

  handleChange(text) {
    this.setState(prevState => {
      const updatedTodos = prevState.toDosList.map(todo => {
        if (todo.text === text) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      console.log(prevState.toDosList)
      console.log(updatedTodos)
      return {
        toDosList: updatedTodos
      }
    })
  }

  render() {
    const startDisplay = this.state.toDosList.length

    console.log(this.state.toDosList)
    
    const viewList = this.state.toDosList.map(item =>
      <TodoItems key={item.text} item={item} handleChange={this.handleChange} />
    )

    return (
      <div className="todo-list">
        <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              name='toDos'
              placeholder="What to do?"
              value={this.state.toDos}
              ref={input => this.text = input}
          />
          <button>Add</button>
        </form>

        {
          startDisplay > 0 ?
          viewList:<p>Waiting for you to type something...</p>
        }

      </div>
    );
  }
}

export default App;
