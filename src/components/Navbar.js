import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul>
                
                <li><Link to='/new'>New Blog</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li>Blogger</li>
            </ul>
            
            
        </div>
    )
}

export default Navbar
