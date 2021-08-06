import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar.jsx'
import {BackDiv,Parent,School,Par, Schoolimg,Click} from "./Homepage.js"

export function Homepage() {
    return (
        <div>
            <Navbar/>
            <Click>Premium admission counseling services available,<strong> To know more Click here</strong></Click>
        <BackDiv>
        <Par>
        <Parent><Schoolimg src="/parents.png"/><div>Login as a Parent</div></Parent>
        <School><Schoolimg src="/school.jpg"/><div>Login as a School</div></School>
        </Par>
           
        </BackDiv>
            
        </div>
    )
}
