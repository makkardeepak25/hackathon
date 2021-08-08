import styled from "styled-components"
import {Link} from "react-router-dom"

export const Click= styled.div`
background-color:black;
color:#e61c5d;
margin-top:65px;
padding:10px;
border-bottom: 4px solid #e61c5d;
 `

export const Par=styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);
position:absolute;
top: 31%;
left: 15%;
width: 70%;
`

export const Assure= styled.div`
font-size:50px;
padding-top:50px;
font-weight: 600;
font-family: 'Oswald', sans-serif;
color:white;`

export const Linked= styled(Link)`
text-decoration: none;
color: black;

`

export const BackDiv= styled.div`
background: url("m.jpg");
height:83vh;
background-size: 100% 100%;
background-repeat: no-repeat;
position: relative;

`
export const Parent= styled.div`
width: 85%;
height: 100%;
margin: auto;
background-color:black;
color: white;
opacity: 0.6;
font-size:50px;
padding:10px;
&:hover{
    color: black;
    background-color:white;
}

`

export const School= styled.div`
width: 90%;
height: 100%;
margin: auto;
background-color:black;
color: white;
opacity: 0.6;
font-size:50px;
padding:10px;

&:hover{
    color: black;
    background-color:white;
}`

export const Schoolimg= styled.img`
width:150px;
height:150px;
padding:10px;
`
