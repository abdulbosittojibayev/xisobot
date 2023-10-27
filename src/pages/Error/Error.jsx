import React from 'react'
import { Link } from 'react-router-dom'
import "./error.css"

const Error = () => {
    document.title = "*404"
    return (
        <div className='error'>
            <h1>*404</h1>
            <p>error</p>
            <Link to="/dashboard"><button>Back to home <i className="fa-solid fa-right-long"></i></button></Link>
        </div>
    )
}

export default Error