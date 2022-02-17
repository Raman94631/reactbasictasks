import React,{useState} from 'react'

const BasicForm = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [allEntry,setAllEntry]=useState([]);
    
    const submitForm=(e)=>{
     e.preventDefault();
     if(email && password){
        const newEntry={id:new Date().getTime().toString(),
            email:email,password:password};
         setAllEntry([...allEntry,newEntry]);
         console.log(allEntry);
         setEmail('');
         setPassword('');
     }else{
         alert('plz fill the data');
     }
     }

  return (
    <>
    <form action="" onSubmit={submitForm}>
    <div>
    <label htmlFor='email'>Email:-</label>
   <input type='text' name='email' id='email' 
   autoComplete='off' value={email}
       onChange={(e)=>setEmail(e.target.value)}
   />
    </div>

    <div>
    <label htmlFor='password'>Password:-</label>
    <input type='password' name='password' id='password'
      autoComplete='off' value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
    </div>

    <button type='Submit'>Login</button>
    </form>

    <div>{
        allEntry.map((val)=>{
               return (
                  <div key={val.id}>
                  <p>{val.email}</p>
                  <p>{val.password}</p>
                   </div>
                )
         })
    }
        </div>
   
    </>
  )
}

export default BasicForm