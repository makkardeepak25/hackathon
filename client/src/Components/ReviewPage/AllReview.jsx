import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {  useParams } from 'react-router-dom'

function AllReview() {
    const {id}=useParams()
    const [data, setData]=useState({})
    const [loading, setLoading]=useState(false)
    const getData=()=>{
        axios.get(`http://localhost:8000/schools/${id}`)
        .then((res)=>{
            setData(res.data.data)
            setLoading(true)
        })
    }

    useEffect(()=>{
        getData()

    },[])
    return loading ? (
        <div style={{marginTop:"15vh"}}>
            {(data.reviewId).map((item)=><div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <h2>{item.rating}</h2>
            </div>)}
        </div>
    ):(<div style={{marginTop:"15vh"}}>...Loading,Please Wait</div>)
}

export default AllReview
