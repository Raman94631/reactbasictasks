import React,{useState} from 'react'

const UseStateArray = () => {
   const myBioData=[
       {id:0,myName:"raman",age:24},
        {id:1,myName:"deep",age:25}, 
        {id:2,myName:"kaur",age:26}
   ]
   const[myArray,setmyArray]=useState(myBioData)

   const clearArray=()=>{
       setmyArray([])
   }
   const removeElem=(id)=>{
       const myNewArray=myArray.filter((curElem)=>{
           return curElem.id!==id;
       })
       setmyArray(myNewArray);

   }
  return (
    <>{
       myArray.map((val)=>{
       return (
           <h1 key={val.id}>Name:{val.myName}
            & Age:{val.age}
            <button onClick={()=>removeElem(val.id)}>Remove</button>
            </h1>
       );
       })
       
    }
    <button onClick={clearArray}>Clear</button>
    </>
  )
}

export default UseStateArray