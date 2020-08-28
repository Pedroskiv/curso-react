import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'

import './assets/css/App.css';

import tasks from './data/task.json';

// Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';

// const App = () => <div> This is my component: <HelloWorld/> </div>

/*function App() {
  return (
    <div>
      This is my component: <HelloWorld/> <HelloWorld/>
    </div>
  );
}*/

class App extends Component
{
  state = 
  {
    tasks: tasks
  }

  addTask = (title, description) =>
  {
    const newTask = 
    {
      title: title,
      description: description,
      id: this.state.tasks.length,
      done: false
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) =>
  {
    const newTasks = this.state.tasks.filter(task => task.id !== id);

    this.setState({
      tasks: newTasks
    })
  }

  checkDone = (id) =>
  {
    const newTasks = this.state.tasks.map(task =>
    {
     if (task.id === id) 
      task.done = ! task.done;
     return task; 
    });

    this.setState({
      tasks: newTasks
    })
  }

  render ()
  {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link> <br/>
          <Link to="/posts">Posts</Link>

          <Route exact path="/" render={() => {
            return <Fragment>
              <TaskForm addTask={this.addTask}/>
              <Tasks 
                tasks={this.state.tasks} 
                deleteTask={this.deleteTask} 
                checkDone={this.checkDone}/>
            </Fragment>
          }}></Route>

          <Route exact path="/posts" render={() => {
            return <Posts/>
          }}/>
        </Router>

      </div>
    )
  }
}

export default App;
