import React, {Component} from 'react';

class Task extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <p>{this.props.children}</p>
                <p><button onClick={this.props.onRemoveTask}>Удалить</button></p>
            </div>
        )
    }
}

export default Task;