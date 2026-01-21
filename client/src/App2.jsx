import React from 'react'
import { use } from 'react';
import { useState ,useEffect} from 'react'

const App2 = () => {
  
  const [count,update] = useState(0);
  const [age,setAge] = useState(5);
  
  // 1st useEffect (()=>{})

    // useEffect(()=>{
    //    console.log("hi i am from 1st method")
        
    // })

    //2nd use effect 
    // useEffect(()=>{console.log('i am from 2nd use effect')},[])

    //3rd use effect
    useEffect(()=>{console.log('i am from 3rd use effect')},[age])
    return (
        <>
        
        <p>count : {count}</p>

        <button onClick={()=>update(count + 1)} className='h-20 w-20 bg-amber-500'>
        </button>
        <p>count : {age}</p>

        <button onClick={()=>setAge(age + 1)} className='h-20 w-20 bg-amber-500'>
        </button>
        </>

  )
}

export default App2
