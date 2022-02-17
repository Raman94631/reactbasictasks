import React,{useState,useEffect} from 'react'


const UseEffects1 = () => {

    const[count,setCount]=useState(0);
        useEffect(()=>{
      document.title=`Chats(${count })`
    });
    console.log('Hello outside  ');
  return (
    <div>
        <h1>{count}</h1>
        <button className='btn' onClick={
            ()=>setCount(count+1)
        }>Click</button>
    </div>
  )
}

export default UseEffects1