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
        <div className="nav">
            {counter}
            <div className="containerbtn">
            <Buttons counter={counter} decrease={decrease} increase={increase} />

            </div>
           
        </div>
       </>
       
   )
}
export default ShowCounter;