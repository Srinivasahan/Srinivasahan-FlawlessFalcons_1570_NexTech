import React, { useState } from 'react'

const Toggle = () => {
    const[isVisible,update]=useState(false);
    const handle=()=>{
        update(!isVisible)
    }
  return (
    <div>
        <button onClick={handle}>Touch me for more!!!</button>
        {isVisible===true ?<h3>Nothing to show!!!</h3>:null}
    </div>
  )
}

export default Toggle