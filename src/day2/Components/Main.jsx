import React from "react";

const Main= () =>{
    return(
      <div><center>
      <label for="name">Email Id: &emsp;</label>
              <input  id="name" type="box" placeholder="Enter Email ID"></input>
           <br>
           </br>
               <label for="na">Password: </label>
             <input id="na" type="box" placeholder="Enter Password"></input>
           <br>
           </br>
             
            <br>
            </br>
        
            <button variant="outlined" color="blue" >Submit</button>
      </center>
        </div>
    );
};

export default Main;