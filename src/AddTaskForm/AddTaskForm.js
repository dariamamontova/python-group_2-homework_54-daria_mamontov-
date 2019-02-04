import React from 'react';

function AddTaskForm(props) {
    return <form className="addTaskForm">
        <input type="text" name="text" value={props.task.text} onChange={props.onChangeInput}/>
        <button disabled={props.isAddButtonDisabled} type="submit" onClick={props.onAddTask}>Добавить</button>
    </form>
}

export default AddTaskForm;