import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./SchoolDetails.module.css"

function SchoolDetails() {

    const {id}=useParams()
    const [data, setData]=useState({})
    const [Loading, setLoading]=useState(false)

    const getData=()=>{
        axios.get(`https://deesmockserver.herokuapp.com/posts/${id}`)
        .then((res)=>{
            setData(res.data)
            setLoading(true)
        })
    }

    useEffect(()=>{
        getData()

    },[])
    return Loading ?(
        <div className={styles.Pmaindiv}>
            <div className={styles.Psubdiv} >
                <div className={styles.Pimagesubdiv} >
                   <img className={styles.Pimg1} src={data.school_image} alt="" />
                   <img className={styles.Pimg1} src={data.school_image} alt="" />
               </div>
               <div className={styles.Pimagesubdiv}>
                   <img className={styles.Pimg1} src={data.school_image} alt="" />
                   <img className={styles.Pimg1} src={data.school_image} alt="" />
                </div> 
           </div>
            <div className={styles.psubdiv2}>
                <h2>School Name: {data.school_name}</h2>
                <h4>Adress: {data.address}</h4>
                <h2>City: {data.city}</h2>
                <br />
                    <h2>Fee Structure:</h2>
                    <h4>Fees:{data.annual_fee}Lakh/Year</h4>


                <br/>
                <h2>Contact Details: </h2>
                <span>Phone: </span><a href={`tel:${data.phone_number}`}>{data.phone_number} </a>
                <br/>
                <span>E-mail: </span><a href={`mailto:${data.email}`}>{data.email}</a>
                <br/>
                <h2>Other Detals: </h2>
                <h4>gst: {data.gst_number}</h4>
                <h4>Teacher Ratio: {data.teacher_to_student_ratio} </h4>

            </div>
        </div>
    ):(<div className={styles.loading}>...Loading,Please Wait</div>)
}

export default SchoolDetails
