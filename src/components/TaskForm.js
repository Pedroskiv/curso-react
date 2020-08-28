import React, {Component} from 'react';

export default class TaskForm extends Component
{
    state =
    {
        title: '',
        description: ''
    }

    // Acción a realizar cuando se envía el formulario
    onSubmitHandler = (e) =>
    {
        e.preventDefault();
        
        this.props.addTask(this.state.title, this.state.description);
    }

    onChangeHandler = (e) =>
    {
        // console.log(e.target.name + " " + e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render () 
    {        
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Write a task title"
                    onChange={this.onChangeHandler}
                    value={this.state.title}
                />
                <br/> <br/>

                <textarea 
                    name="description"
                    placeholder="Write here a task description" 
                    onChange={this.onChangeHandler} 
                    value={this.state.description}>    
                </textarea>
                <br/> <br/>

                <button type="submit">
                    Save task
                </button>
            </form>
        )
    }
}