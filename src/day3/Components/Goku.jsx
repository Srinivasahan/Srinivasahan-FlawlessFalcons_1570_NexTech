import  { useState } from 'react'

export const Goku = () => {
    const[isVisible,display]=useState("Kaioken");
  return (
    <div>
        <input type='checkbox' onChange={()=>{ 
            isVisible==="Kaioken"?display("SuperSaiyan"):display("Kaioken")
        }} /><h3>{isVisible}</h3>
    </div>
  )
}