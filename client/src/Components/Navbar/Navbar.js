import styled from "styled-components"
import {Link} from "react-router-dom"


export const Nav= styled.div`
position:fixed;
background-color:#9A1750;
width:100%; 
top:0;
z-index:100000;
display:flex;
justify-content:space-around;
padding:0px;
color:black;
font-size:18px;
font-weight:bold;
font-family: 'Oswald', sans-serif;`


export const Img= styled.img`
width:13%;
height:70px;
padding: 5px;
cursor: pointer;
 `
export const Div= styled.div`
margin-top:29px;


`
export const Linked= styled(Link)`
text-decoration: none;
color: black;

`

export const Div1= styled.div`
margin-top:25px;
display: flex;
`


 

 export const Img1=styled.img`
 width:100%;
 height:83.3vh;
 filter: blur(3px);
  -webkit-filter: blur(3px);`

export const Input=styled.input`
width:280px;
height:28px;
padding:2px;
background-color:white;
border:none;
border-radius:5px;
padding-left:5px;`

export const Butt=styled.button`
width:90px;
height:31px;
padding:4px;
border-radius:5px;
background-color:white;
font-weight: 700;
border:none;
margin-left:20px;`





