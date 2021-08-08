import React from "react";
import { Nav, Img, Div, Div1, Butt, Input, Linked } from "./Navbar.js";
import { useHistory } from "react-router-dom"; 

  export function Navbar() {
    const [query, setQuery] = React.useState(" ");
    const history=useHistory()

    const handleChange = (e) => {
      setQuery(e.target.value);
    };
    const handleClick = () => { }

  return (
    <>
      <Nav>
        <Img src="/icon.png" onClick={()=>history.push("/")} />
        <Div>
          <Linked to={"/register-school"}>Register School</Linked>
        </Div>
        <Div>
          <Linked to={"/register-parent"}>Register Parent</Linked>
        </Div>
        <Div>
          <Linked to={"/searchpage"}>Find School</Linked>
        </Div>
        <Div>
          <Linked to={"/counselling"}>Parent's Counselling</Linked>
        </Div>
        <Div>
          <Linked to={"/blog"}>Blog</Linked>
        </Div>
        <Div>
          <Linked to={"/call-us"}>Call Us</Linked>
        </Div>
      </Nav>
    </>
  );
}


