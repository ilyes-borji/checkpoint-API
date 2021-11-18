// import {useState,useEffect} from 'react';
import{useState,useEffect} from 'react'
import axios from  'axios'
// import './App.css';
import './Component/Style.css'
import UserList from './Component/UserList';

function App() {

 
const [users , setUsers]=useState([])
useEffect(() => {
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res =>{
    setUsers(res.data)
  } )
 
 
}, [])
console.log("users",users)
  
return (
    <div className="App">
     


        <ul  style={{ 
 
    display: 'flex',flexWrap: 'wrap', justifyContent: 'space-around',alignItems: 'center'}} 
   >
          
          
          
          
          {users.map(el => (<li key ={el.id}style={{listStyle:'none',   
    
   
     width:'300px'}}><UserList users={el}/></li>
        ))}</ul>
  

    </div>
  );
}
export default App;
