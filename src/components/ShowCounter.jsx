import { useState } from "react";
import './showcounter.css'
import Buttons from './Buttons';
function ShowCounter(){

    const[counter,setcounter]=useState(0)
    function increase(){
        setcounter(counter+1)
    }
    function decrease(){
        setcounter(counter-1)
    }
   return(
       <>
        <h2 className="pt-5 text-warning">This Is A Simple Counter</h2>
        <div className="nav">
           
           <div className="counter">
                {counter}
           </div>
            <div className="containerbtn">
            <Buttons counter={counter} decrease={decrease} increase={increase} />

            </div>
           
        </div>
       </>
       
   )
}
export default ShowCounter;