import React, {useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Styles from "./Filter.module.css"

const payload={
  city:"",
  standard:"",
  board:""  
};

function InputSearch() {

    const [searchData,setSearchData]=React.useState(payload);
    const { city,standard, board}=searchData;

    let parm = new URLSearchParams();
    let history = useHistory();

    const handleSubmit = () => {
        history.push("/result?" + parm.toString());
      };

    useEffect(() => {
        for (let key in searchData) {
        if (searchData[key]) {
            parm.set(key, searchData[key]);
        }
        }
    }, [searchData, parm]);

    const handleSearchData = (e) => {
        const { value, name } = e.target;
        setSearchData({ ...searchData, [name]: value });
      };
      console.log(searchData)
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
