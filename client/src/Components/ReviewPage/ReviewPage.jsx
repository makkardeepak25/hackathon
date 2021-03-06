import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {Main,Input, Button} from './Review.js'

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
    let parentData = sessionStorage.getItem("parent")
    let patData = JSON.parse(parentData)
    let parentId = patData._id;
    let schoolId=data&&data._id
    
    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        axios.get(`http://localhost:8000/schools/${id}`)
            .then((res) => {
            setData(res.data.data)
            setLoading(true)
        })
    }
    const handleChange=(e)=>{
        const {value,name}=e.target;
            setInput({...input,[name]:value})
    }

    const postReview = () => {
        var payload = {
            title, body, rating,
            parentId, schoolId
        }
        axios.post(`http://localhost:8000/review`,payload)
        .then(res=>alert(res))
    }
    console.log(data)

 
    return loading ? (
        <Main style={{marginTop:"15vh"}}>
            
            <h2>Add Your Reviews Here ! </h2>
            <Input type="text" name="title" value={title} placeholder="add Review Title here" onChange={handleChange} /><br/>
            <Input type="text" name="body" value={body} placeholder="add Comments here" onChange={handleChange} /><br/>
            <Input type="text" name="rating" value={rating} placeholder="add ratings here" onChange={handleChange} /><br/>
            <Button onClick={()=>postReview()}>Add Review</Button>
        </Main>
    ):(<div style={{marginTop:"15vh"}}>...Loading,Please Wait</div>)
}

export default ReviewPage
