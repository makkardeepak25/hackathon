import React from 'react'
import Styles from "./Result.module.css"
import { useHistory } from "react-router-dom";

function Card({item}) {
    const {id,school_name,email,annual_fee,address,city,school_images}=item
    let history = useHistory()
    const handlePush=(id)=>{
      history.push(`/details/${id}`)  
    }
    return (
        <div className={Styles.cardMain1}>
            <div className={Styles.cardflex}>
                <img className={Styles.cardImage} src={school_images} alt="" />
            </div>
            <div className={Styles.cardflex1}>
                <h2 className={Styles.subName}>{school_name}</h2>
                <p className={Styles.subName1}>Adress: {address}</p>
                    <div className={Styles.subDiv1}>
                            <h3>City: {city}</h3>
                            <h3>{email}</h3>
                           
                    </div> 
                    <div className={Styles.subDiv2}>
                         <h3>Fees: {annual_fee} Lakh/Year</h3>
                        <button className={Styles.cardButton} onClick={()=> handlePush(id)}>More Details</button>
                    </div>
                </div>
            </div>
    )
}

export default Card
