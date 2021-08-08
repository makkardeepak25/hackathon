import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const payload={
    title:"",
    body:"",
    rating:""
}

function ReviewPage() {
    const[input, setInput]=useState(payload)
    const {title,body,rating}=input
    const [data,setData]=useState({})
    const {id}=useParams()
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        axios.get(`http://localhost:8000/schools/${id}`)
        .then((res)=>{
            setData(res.data.data)
            setLoading(true)
        })
    }
    const handleChange=(e)=>{
        const {value,name}=e.target;
            setInput({...input,[name]:value})
    }

    const postReview=()=>{
        (data.reviewId).push(input)
        axios.patch(`http://localhost:8000/schools/${id}`,data)
        .then(res=>alert(res))

    }
    console.log(data)
 
    return loading ? (
        <div style={{marginTop:"15vh"}}>
            <input type="text" name="title" value={title} placeholder="add Review Title here" onChange={handleChange} />
            <input type="text" name="body" value={body} placeholder="add Comments here" onChange={handleChange} />
            <input type="text" name="rating" value={rating} placeholder="add ratings here" onChange={handleChange} />
            <button onClick={()=>postReview()}>Post Review</button>
        </div>
    ):(<div style={{marginTop:"15vh"}}>...Loading,Please Wait</div>)
}

export default ReviewPage
