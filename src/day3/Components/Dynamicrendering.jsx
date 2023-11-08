import React from 'react'
export const Dynamicrendering = () => {
  const arr=["angular js","react js","next js","node js","vue js","javascript"];
  return (
    <div>
      <ul>
          {arr.map((n,i)=><li key={i}>{n}</li>)}
      </ul>
    </div>
  );
}
