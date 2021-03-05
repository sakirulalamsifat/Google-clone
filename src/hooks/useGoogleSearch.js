import {useState,useEffect} from "react"
import API_KEY from "../components/keys"

const CONTEXT_KEY= "c7bd172f83093c5ad";

const useGoogleSearch = (term) => {
    const [data,setData]=useState(null);

    useEffect(()=>{
        const fetchData=async()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response=>response.json())
            .then(result=>{
                setData(result)
            })
        }

        fetchData();
    }, [term])

    return {data};
}

export default useGoogleSearch
