import Blog from './Blog'

import useFetch from './useFetch'


const Body = () => {
    const {data,loading,error}=useFetch("http://localhost:8000/blogs")
    
    return (
        <header >
            {error&& <div><h3>{error}</h3></div>}

            {loading && <div>Loading Blogs...</div>}
            {data && <Blog blog={data} />}
            
        </header>
    )
}

export default Body


