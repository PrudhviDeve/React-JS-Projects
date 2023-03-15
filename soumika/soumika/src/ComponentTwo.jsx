import React, { useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { appContext } from './ComponentOne'

function ComponentTwo(props) {

    const id = useParams()

    

    const [ID,setID] = useState(id.ID)

    

    console.log(props)
 
    const requiredData = useContext(appContext)
    console.log(requiredData)
    console.log("Prudhvi")

  return (
    <div>
        <p>{requiredData[ID].id}</p>
        <p>{requiredData[ID].name}</p>
        <h1>Prudvi</h1>
    </div>
  )
}

export default ComponentTwo