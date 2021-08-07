import React from 'react'
import Card from './Card'
import Styles from "./Result.module.css"

function Result({schoolData,page,setPage,handleFilter}) {
    

    return (
        <div>
             <div className={Styles.filterMain}>
                <div className={Styles.filterSub}>
                    <h2>Apply Filter here:</h2>
                    <div>
                        <label className={Styles.filterLableSelect}> Fees :  
                        <select className={Styles.filterSelect} onChange={handleFilter} name="">
                            <option className={Styles.filterLableSelect} hide selected>Select Fees here</option>
                            <option className={Styles.filterLableSelect} value="1">1 Lakh/Year/below</option>
                            <option className={Styles.filterLableSelect} value="2">2 Lakh/Year/below</option>
                            <option className={Styles.filterLableSelect} value="3">3 Lakh/Year/below</option>
                            <option className={Styles.filterLableSelect} value="4">4 Lakh/Year/below</option>
                            <option className={Styles.filterLableSelect} value="5">5 Lakh/Year/below</option>
                            <option className={Styles.filterLableSelect} value="6">6 Lakh/Year/below</option>
                            <option className={Styles.filterLableSelect} value="7">7 Lakh/Year/below</option>
                            <option className={Styles.filterLableSelect} value="8">8 Lakh/Year/below</option>
                            <option className={Styles.filterLableSelect} value="9">9 Lakh/Year/below</option>
                            <option className={Styles.filterLableSelect} value="10">10 Lakh/Year/below</option>
                        </select>
                        </label>
                    </div>
                    <div className={Styles.card}>
                        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
                        <p>{page}</p>
                        <button onClick={()=>setPage(page+1)}>Next</button>
                    </div>
                </div>
                <div className={Styles.cardDivMain}>
                    <div >
                        {schoolData.map((item)=><Card item={item}/>)} 
                    </div>
                </div>

             </div>
            
           
        </div>
       
    )
}

export default Result
