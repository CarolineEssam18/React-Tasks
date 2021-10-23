import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div className="d-flex justify-content-around container-fluid bg-warning">
            <p>Logo</p>
            <ul className="d-flex" style={{listStyle:'none'}}>
                <li className="me-5"><Link to="/">Home</Link></li>
                <li className="me-5"><Link to="/shop">Shop</Link></li>
                <li className="me-5"><Link to="/count">Counter</Link></li>
                <li className="me-5"><Link to="/todo">ToDo</Link></li>
                <li className="me-5"><Link to="/login">Log In</Link></li>
                <li className="me-5"><Link to="/register">Register</Link></li>



            </ul>
        </div>
    )
}

export default Nav
