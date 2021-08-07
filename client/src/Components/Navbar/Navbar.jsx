import React from 'react'
import {Nav,Img,Div,Div1,Img1,Butt,Input,Linked} from "./Navbar.js";



export  function Navbar() {
    return (
        <>
        <Nav>
            <Img src="/icons.png"/>
            <Div1><Input type="text" placeholder="please type school name or location"/>
            <Butt type="button">Search</Butt></Div1>
            <Div><Linked to={"/call-us"}>Call Us</Linked></Div>
            <Div><Linked to={"/blog"}>Blog</Linked></Div>
            <Div><Linked to={"/register-school"}>Register School</Linked></Div>
            <Div><Linked to={"/find-school"}>Find School</Linked></Div>
            <Div><Linked to={"/counselling"}>Parent's Counselling</Linked></Div>   
        </Nav>
        
        
        

            

            
        </>
    )
}
