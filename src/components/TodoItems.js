import React from 'react'

function TodoItems(props) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={()=> props.handleChange(props.item.text)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItems