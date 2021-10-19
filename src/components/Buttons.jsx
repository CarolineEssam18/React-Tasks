
function Buttons(props){
    return(
        <>
         <button className="btn btn-primary me-3" onClick={props.increase}> + </button>
         <button className="btn btn-primary " onClick={props.decrease}>-</button>
        </>
        
    )
}

export default Buttons;