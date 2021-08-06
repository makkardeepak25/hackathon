import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar.jsx'
import {BackDiv,Parent,School,Par, Schoolimg,Click,Assure,Linked} from "./Homepage.js"


export function Homepage() {
    return (
        <div>
            <Navbar/>
            <Click>Premium admission counseling services available,<strong> To know more Click here</strong></Click>
        <BackDiv>
           <Assure> Search > Select School > Apply Online > Get Admission</Assure>
        <Par>
        <Linked to={"/login-parent"}><Parent><Schoolimg src="/parents.png"/><div>Login as a Parent</div></Parent></Linked>
        <Linked to={"/login-school"}><School><Schoolimg src="/school.jpg"/><div>Login as a School</div></School></Linked>
        </Par>
           
        </BackDiv>
            
        </div>
    )
}
