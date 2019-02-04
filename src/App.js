import React, {Component} from 'react';
import './App.css';
import Task from './Task/Task.js';
import AddTaskForm from './AddTaskForm/AddTaskForm.js'

class App extends Component {
    state = {
        toDoList: [
            {id: 1, text: 'Get up'},
            {id: 2, text: 'Survive'},
            {id: 3, text: 'Go back to bed'}
        ],

        currentTask: {text: ''},
};


    removeTask = (id) => {
        let taskId = this.state.toDoList.findIndex(task => {
            return task.id === id;
        });

        const toDoList = [...this.state.toDoList];
        toDoList.splice(taskId, 1);

        this.setState({
            ...this.state,
            toDoList
        });
    };

    changeTaskInput = (event) => {
        let value = event.target.value;
        let currentTask = {
            ...this.state.currentTask,
            text: value
        };
        this.setState({
            ...this.state,
            currentTask
        });
};

    addTask = (event) => {
        event.preventDefault();
        let task = {...this.state.currentTask};
        const now = new Date();
        task.id = now.getTime();
        let toDoList = [...this.state.toDoList, task];
        this.setState({
            ...this.state,
            toDoList,
            currentTask: {
                text: ''
            }
        });
    };

    isAddButtonDisabled = () => {
       return this.state.currentTask.text === '';
};

    render() {
        return (
            <div className="App container">
                <div className="my-5">
                    <AddTaskForm
                        task={this.state.currentTask}
                        onChangeInput={this.changeTaskInput}
                        onAddTask={this.addTask}
                        isAddButtonDisabled={this.isAddButtonDisabled()}
                    />
                </div>
                <div>
                {this.state.toDoList.map((task) => {
                        return <Task key={task.id} onRemoveTask={() => this.removeTask(task.id)} >
                            {task.text}
                        </Task>;
                    })}
                </div>
            </div>
        );
    }
}

export default App;
