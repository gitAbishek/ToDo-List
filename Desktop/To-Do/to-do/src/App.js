import {useState} from "react";
import ToDoLists from "./ToDoLists";
import './App.css';

function App() {
  const [inputList,setInputList] = useState("")
  const [items,setItems] = useState([])

  const inputEvent = (event) =>{
    setInputList(event.target.value)
  }

  const listofItems = () =>{
    setItems( (oldItems) =>{
      return [...oldItems,inputList]
    })
    setInputList("");
  }

  const deleteItem = (id) =>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      })
    })
  }


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="header">ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Items" 
           value={inputList}
           onChange={inputEvent}/>
          <button onClick={listofItems} className="btn">+</button>

          <ol>
            {
              items.map( (itemVal,index) => {
                return <ToDoLists text={itemVal}
                  key={index}
                   id={index}
                   onSelect={deleteItem}
                   />
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
