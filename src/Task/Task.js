import React, {Component} from 'react';

class Task extends Component {
    render() {
        return (
            <div className="card border-secondary align-middle my-2 pt-3 text-secondary">
                <p>{this.props.children}
                    <a href='#' className="ml-4 text-danger" onClick={this.props.onRemoveTask}>
                        <i className="fas fa-trash-alt"></i>
                    </a><
                    /p>
            </div>
        )
    }
}

export default Task;