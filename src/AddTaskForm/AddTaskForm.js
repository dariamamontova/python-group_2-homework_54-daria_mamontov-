import React from 'react';

function AddTaskForm(props) {
    return <form className="addTaskForm">
        <input type="text" name="text" value={props.task.text} onChange={props.onChangeInput}/>
        <button className="btn btn-danger" disabled={props.isAddButtonDisabled} type="submit" onClick={props.onAddTask}>Add new</button>
    </form>
}

export default AddTaskForm;