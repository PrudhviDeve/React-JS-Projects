import React,{useState} from "react";
import {createContext} from 'react'
import { useNavigate } from "react-router-dom";


const users = [
  {
    id: 0,
    name: "Soumika",
    age: 41,
  },
  {
    id: 1,
    name: "Prudhvi",
    age: 29,
  },
];

export const appContext = createContext(users);

function ComponentOne() {
  const [ID, setID] = useState(0)
  const navigate = useNavigate() 
  console.log(appContext);

  const handleClick = (ID) => {
    console.log(ID)
    navigate(`/second/${ID}`)
  };
  return (
    <div>
      <h1>Hello</h1>
      <button type="button" onClick={handleClick(ID)}>
        Click me to show the details of Soumika
      </button>
      
    </div>
  );
}

export default ComponentOne;
