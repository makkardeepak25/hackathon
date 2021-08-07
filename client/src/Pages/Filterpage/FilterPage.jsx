import axios from 'axios';
import React, {useEffect } from 'react'
import { useState } from 'react';
import InputSearch from '../../Components/Filterpage/InputSearch'
import SearchImage from '../../Components/Filterpage/SearchImage';
import Result from "../../Components/ResultPage/Result"
import Styles from "../../Components/ResultPage/Result.module.css"

const payload={
    city:"",
    standard:"",
    board:""  
  };
function FilterPage() {
    const [searchData,setSearchData]=React.useState(payload);
    const [loading, setLoading]=useState(true)
    const [page,setPage]=React.useState(1)
    const [schoolData,setSchoolData]=React.useState([])
    let parm = new URLSearchParams();

    // Search button Click function start
     const handleSubmit = () =>{
        getSchoolData()
      };

      const getSchoolData=(limit=10)=>{
        axios.get(`http://localhost:8000/schools?${parm.toString()}`,{
            params :{
                _page :page,
                _limit : limit
            }
        })
            .then((res)=>{
                console.log(res)
                setSchoolData(res.data.data);
                if(schoolData.length>=1){
                    setLoading(true)
                }
                else{
                    setLoading(false)
                }
            }).catch((err)=>alert(err))
      }

      useEffect(()=>{
        getSchoolData()
      },[page])
    //   end here
    
    // Set Param function starts
    useEffect(() => {
        for (let key in searchData) {
        if (searchData[key]) {
            parm.set(key, searchData[key]);
        }
        }
    }, [searchData, parm]);
        //  ends here

    const handleSearchData = (e) => {
        const { value, name } = e.target;
        setSearchData({ ...searchData, [name]: value });
      };

      const handleFilter=(e)=>{
          const updatedList= schoolData.filter((el)=>el.annual_fee<=e.target.value)
          setSchoolData(updatedList)
      }
    return (
        <div>
            <div>
            <InputSearch searchData={searchData}
            handleSearchData={handleSearchData}
            handleSubmit ={handleSubmit}/>
            </div>
            <div>
               {loading ? <Result schoolData={schoolData} page={page} setPage={setPage} handleFilter={handleFilter}/> : <SearchImage/>}
            </div>
           
            
        </div>
    )
}

export default FilterPage
