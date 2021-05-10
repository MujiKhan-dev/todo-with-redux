import React, { useState } from 'react';
import './App.css';
import {useDispatch, useSelector } from 'react-redux'

const List = () => {
 const list = useSelector(state => state.list);
 if (!list || !list.length) {
   return <p className="list">NO TODOS FOUND</p>
 }
 return(
   <ul>
     {list.map((p) => <li>{p.label}</li>)}
   </ul>
 )
}

const Input = () => {
 const dispatch = useDispatch();
 const [newList, setNewList] = useState();
 const handleChange = (event) => setNewList(event.target.value);
 const handleClick = () => dispatch({
   type: 'ADD_LIST',
   payload: {
     label: newList,
   }
 })
 return(
   <div>
     <input value={newList} onChange={handleChange} type="text" />
     <br />
     <br />
     <button onClick={handleClick}>ADD</button>
   </div>
 )
}

function App() { 

      return (
      <div className="todo">
          <h2 className="list">TODOS</h2>

        <List />
        <Input />
        
      </div>	
      );
 
}

export default App;