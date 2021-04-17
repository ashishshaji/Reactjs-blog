import { useState, useEffect } from 'react'
 
 function useFetch(url) {
    const [data, setBlog] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState(null)
    useEffect(() => {
        const abortCont= new AbortController()
        fetch(url,{ signal: abortCont.signal })

            .then(res => {
                if (!res.ok) {
                    throw Error("Failed to load blogs ")
                }
                return res.json()
            })
            .then(data => {
                setBlog(data)
                setLoading(false)
                setError(null)

            })

            .catch(err => {
                if(err.name!=='AbortError'){
                    setLoading(false)
                    setError(err.message)

                }
               

            })
      // abort the fetch
    return () => abortCont.abort(); 
 },[url])
 
 return {data,loading,error}

}
export default useFetch
