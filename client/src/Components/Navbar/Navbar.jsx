import React from "react";
import { Nav, Img, Div, Div1, Img1, Butt, Input, Linked } from "./Navbar.js";

export function Navbar() {
  const [query, setQuery] = React.useState(" ");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleClick = () => {

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
        
        
        
  };
  return (
    <>
      <Nav>
        <Img src="/icons.png" />
        <Div1>
          <Input
          value={query}
            type="text"
            placeholder="please type school name or location"
            onChange={handleChange}
          />

          <Butt type="button" onClick={handleClick}>
            Search
          </Butt>
        </Div1>

        <Div>
          <Linked to={"/register-school"}>Register School</Linked>
        </Div>
        <Div>
          <Linked to={"/register-parent"}>Register Parent</Linked>
        </Div>
        <Div>
          <Linked to={"/find-school"}>Find School</Linked>
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
