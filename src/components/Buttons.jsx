import { useState } from "react";

function Buttons(props){
    return(
        <>
         <button className="btn" onClick={props.increase}> + </button>
         <button className="btn" onClick={props.decrease}>-</button>
        </>
        
    )
}

export default Buttons;