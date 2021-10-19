import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export const Shop = () => {

    useEffect(() => {
        getallproducts()
    }, [])

    const[products,setproducts]=useState([])
   const getallproducts=()=>{
       return fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setproducts(json))
    }
    return (
        <div>
            <div className="d-flex flex-wrap container-fluid justify-content-center pt-5">
                    {products.map(product=>{
                        return (
                            <Link to={`/shop/${product.id}`} key={product.id} className="w-25 p-3 border m-3">
                                <img className="w-50 p-3" src={product.image}/>
                                <h6>  {product.title}  </h6>
                                <p>price : {product.price}</p>
                                <p>Rating : {product.rating.rate}</p>
                            </Link>
                        )
                    })}
            </div>
            
        </div>
    )
}

export default Shop