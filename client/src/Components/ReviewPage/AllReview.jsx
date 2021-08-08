import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {  useParams } from 'react-router-dom'

function AllReview() {
    const {id}=useParams()
    const [data, setData]=useState({})
    const [loading, setLoading]=useState(false)
    const getData=()=>{
        axios.get(`http://localhost:8000/review/${id}/reviews`)
        .then((res)=>{
            setData(res.data.data)
            setLoading(true)
        })

    }
    console.log(data)

    useEffect(()=>{
        getData()

    },[])
    return loading ? (
        <div style={{marginTop:"9vh" ,display:"grid", gridTemplateColumns:"repeat(2,1fr)",height:"80vh", gap:"3%", padding:"5% 15%",background:"#f3e5e7" }}>
            {data?.map((item)=><div style={{background:"#FFB6C1",borderRadius:"10px" }}>

                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <h2>{item.rating}</h2>
                <p>by-{item.parentId.guardian_name}</p>
            </div>)}
        </div>
    ):(<div style={{marginTop:"15vh"}}>...Loading,Please Wait</div>)
}

export default AllReview
