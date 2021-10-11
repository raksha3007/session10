import React,{useEffect,useState} from 'react';
import usePersistenceState from './hook/usePersistenceState';



const App  = () =>{
const[letter,setLetter] = usePersistenceState();

const handleOnSearch = (e)=>{
    setLetter(e.target.value);
};
  return(
    <button  onClick ={()=>
        {setLetter(letter)}}> 
      
      click me {letter+1}  </button>
      


      
  );
  
    };
    export default App;
    