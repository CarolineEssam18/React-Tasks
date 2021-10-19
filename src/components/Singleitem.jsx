import React from 'react'
import {useEffect, useState} from 'react'
function Singleitem({match}) {
    const[singleproduct,setsingleproduct]=useState(null)
    useEffect(() => {
      getdetails()
    }, [])
    const getdetails=()=>{
      return  fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then(res=>res.json())
            .then(json=>setsingleproduct(json))
    }
    return (
      <div>
          {
              singleproduct
              ?
                (  <div className="pt-5">
                    <img className="w-25 p-3" src={singleproduct.image}/>
                                         <h6>  {singleproduct.title}  </h6>
                                         <p>price : {singleproduct.price}</p>
                                         <p>Rating : {singleproduct.rating.rate}</p>
                 </div>)
              :
              (<div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>)
          }
      </div>
    )
}

export default Singleitem
