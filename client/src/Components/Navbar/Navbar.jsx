import React from 'react'
import {Nav,Img,Click,Div,Div1,Img1,Butt,Input,Search,BackDiv,Parent,School,Par} from "./Navbar.js"


export  function Navbar() {
    return (
        <>

        <Nav>
            <Img src="/logo.jpg"/>
            <Div1><Input type="text" placeholder="please type school name or location"/>
            
            <Butt type="button">Search</Butt></Div1>
            <Div><a href="#">Call Us</a></Div>
            <Div><a href="#">Blog</a></Div>
            <Div><a href="#">Register School</a></Div>
            <Div><a href="#">Find School</a></Div>
            <Div><a href="#">Parent's Counselling</a></Div>   
        </Nav>
        <Click>Premium admission counseling services available,<strong> To know more Click here</strong></Click>
        <BackDiv>
        <Par>
        <Parent><img src="/parent.jfif"/>Parent's</Parent>
        <School>School</School>
        </Par>
           
        </BackDiv>
        
        

            

            
        </>
    )
}
