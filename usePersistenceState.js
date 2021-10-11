import React,{useEffect,useState} from 'react';


const usePersistenceState  = () =>{
  const[letter,setletter] = useState(
  localStorage.getItem("letter")||""
  );
  useEffect(()=>{
  localStorage.setItem("letter",letter);
    },[letter]);
    return[letter,setletter];
    
  
  
    };
    export default usePersistenceState;
    