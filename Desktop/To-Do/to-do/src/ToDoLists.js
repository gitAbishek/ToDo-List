import { TiDelete } from 'react-icons/ti';
const ToDoLists = (props) =>{
    return (
        <>
            <div className="todo_style">
            <TiDelete className="delete_btn"
            onClick={()=>{
                props.onSelect(props.id)
            }}
            />
            <li className="list_text">{props.text}</li>
            </div>
        </>
    )
}

export default ToDoLists;