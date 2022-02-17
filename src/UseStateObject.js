import React, { useEffect, useState } from 'react'

const UseStateObject = () => {
    const [myObject,setMyObject]=useState({
        myName:"raman",myage:24,degree:"CSE"
    })
    const changeObject=()=>{
setMyObject({...myObject,myName:'hey its raman'})
    }
    const removeElem=()=>{

    }
  return (
    <div>
        <h1>Name:{myObject.myName} & Age:{myObject.myage} & Degree:{myObject.degree}</h1>
    <button className="btn" onClick={changeObject}>Update</button>
    <button className='btnInner' onClick={removeElem(curElm.id)}>Remove</button>
    </div>
  )
}


export default UseStateObject