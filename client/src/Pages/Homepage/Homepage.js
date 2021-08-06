import styled from "styled-components"

export const Click= styled.div`
background-color:black;
color:yellow;
margin-top:80px;
padding:10px;
 `

export const Par=styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);
position:absolute;
top: 25%;
left: 19%;
width: 60%;
`

export const BackDiv= styled.div`
background: url("m.jpg");
height:83.5vh;
background-size: 100% 100%;
background-repeat: no-repeat;
position: relative;

`
export const Parent= styled.div`
width: 70%;
height: 100%;
margin: auto;
background-color:black;
color: white;
opacity: 0.6;
font-size:50px;
&:hover{
    color: black;
    background-color:white;
}

`

export const School= styled.div`
width: 70%;
height: 100%;
margin: auto;
background-color:black;
color: white;
opacity: 0.6;
font-size:50px;

&:hover{
    color: black;
    background-color:white;
}`

export const Schoolimg= styled.img`
width:150px;
height:150px;
padding:10px;
`
