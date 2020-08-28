import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './../assets/css/tasks.css';

class Task extends Component
{
    render ()
    {
        const {task} = this.props;
        const pBackground = 
        {
            background: task.done ? '#7cde7c' : '#ff9292'
        };
        const btnDelete = 
        {
            fontSize: "18px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            padding: "10px 15px",
            cursor: "pointer",
            float: "right"
        };

        return (
            <div className="red">
                <p style={pBackground}>
                    {task.id} - 
                    {task.title} - 
                    {task.description}

                    <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
                    <button 
                        style={btnDelete} 
                        onClick={this.props.deleteTask.bind(this, task.id)}>
                        X
                    </button>
                </p>                
            </div>
        )
    }
}

// Definir tipo de dato(s) a esperar
Task.propTypes =
{
    // Se espera un objeto
    task: PropTypes.object.isRequired
}

export default Task;