import React from 'react'
import Search from "./Images/Search image.jpg"
import Styles from "./Filter.module.css"

function SearchImage() {
    return (
        <div className={Styles.searchImageDiv}>
            <h2>Make a valid Search Here</h2>
            <img src={Search} alt="" />
        </div>
    )
}

export default SearchImage
