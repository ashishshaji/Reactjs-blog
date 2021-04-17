import { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history=useHistory('')
    
    function handleSubmit(e) {
        e.preventDefault();
        const blog = { title, author, body }
        console.log(blog)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(blog)
        })
        //.then( history.push('/'))
        .then(()=>{
            history.push('/')
        })

    }


 

    return (
        <div className="create">
            <h3>Add new Blog</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                >

                </input>
                <label>Author</label>
                <input type="text" required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}

                ></input>
                <label>Write your blog here</label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}

                ></textarea>
                <button className="btn">Add Blog</button>
               



            </form>
        </div>
    )

}

export default CreateForm



