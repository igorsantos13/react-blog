import { useState, useEffect } from "react";

const useFetch = (url)=> {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null)


    useEffect(()=>{
    const abortFetch = new AbortController();

        fetch(url, {signal: abortFetch.signal})
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data for that resource')
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setLoading(false)
            setError(null)
        })
        .catch(err =>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
            setLoading(false)
            setError(err.message)
            }
        })
        return () => abortFetch.abort()
    }, [url])

    return {data, isLoading, error};

}

export default useFetch;