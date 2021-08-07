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
        <Img src="/icons.png" onClick={()=>history.push("/")} />
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
