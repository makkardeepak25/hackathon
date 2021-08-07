import React from 'react'
import Styles from "./Filter.module.css"



function InputSearch({searchData,handleSearchData,handleSubmit }) {
    const { city,standard, board}=searchData;
    return (
        <div className={Styles.mainInput}> 
            <div className={Styles.inputDiv1}>
                <p className={Styles.inputtext}>* Required</p>
                <input className={Styles.inputTag1} name="city" value={city} onChange={handleSearchData} placeholder="Add your City here" type="text"/>
               
            </div>
            <div className={Styles.inputDiv}>
                <input className={Styles.inputTag} name="standard" value={standard} onChange={handleSearchData} placeholder="Add Standard here" type="text"/>
            </div>
            <div className={Styles.inputDiv}>
                <input className={Styles.inputTag} name="board" value={board} onChange={handleSearchData} placeholder="Add Required Board here" type="text"/>
            </div>
            <div className={Styles.inputDiv}>
                <button onClick={()=>handleSubmit()} className={Styles.inputButton}>Search</button>
            </div>  
        </div>
    )
}

export default InputSearch
