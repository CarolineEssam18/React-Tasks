import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div className="d-flex justify-content-around container-fluid mt-5 bg-warning">
            <p>Logo</p>
            <ul className="d-flex" style={{listStyle:'none'}}>
                <li className="me-5"><Link to="/">Home</Link></li>
                <li className="me-5"><Link to="/shop">Shop</Link></li>
                <li className="me-5"><Link to="/count">Counter</Link></li>
            </ul>
        </div>
    )
}

export default Nav
