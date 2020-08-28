import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

class Tasks extends Component
{
    render ()
    {
        return this.props.tasks.map(e => 
        <Task 
            task={e} 
            key={e.id} 
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
        />);
    }
}

// Definir tipo de dato(s) a esperar
Tasks.propTypes =
{
    // Se espera un arreglo
    tasks: PropTypes.array.isRequired
}

export default Tasks;