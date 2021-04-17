import React from 'react'
import {Link} from 'react-router-dom'

function Blog({ blog}) {


    return (
        <div>

            {blog.map((blog) => (
                <div key={blog.id} className="container">
                    <h3>{blog.title}</h3>
                    <h4>Author: {blog.author}</h4>
                    
                    <Link to={`/blog/${blog.id}`}>
                    <button className="btn">Read more</button>
                    </Link>
                    

                </div>
            ))}
        </div>
    )
}


export default Blog


