import React from 'react'
import Card from './Card'
import Styles from "./Result.module.css"

function Result({schoolData,page,setPage}) {
    

    return (
        <div className={Styles.cardDivMain}>
         {schoolData.map((item)=><Card item={item}/>)} 
         <div className={Styles.card}>
             <button disabled={page==1} onClick={()=>setPage(page-1)}>Prev</button>
             <p>{page}</p>
             <button onClick={()=>setPage(page+1)}>Next</button>
         </div>
        </div>
    )
}

export default Result
