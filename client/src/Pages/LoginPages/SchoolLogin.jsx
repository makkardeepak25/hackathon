import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { saveData } from "./../../Utils/localStorage";
import { Redirect, useHistory } from "react-router-dom";
const Container = styled.div`
  height: 100vh;
  background-image: url("https://previews.123rf.com/images/jittawit/jittawit1911/jittawit191100262/135048776-back-to-school-education-concept-classroom-in-blur-background-young-student-blurry-view-of-elementar.jpg");
  background-size: cover;
`;
const RightCol = styled.div`
  align-items: center;
  width: 50%;
  margin-left: 50%;
`;
const LoginDetails = styled.div`
  padding-top: 15%;
  width: 50%;
  margin: auto;
  color: #632604;
  p {
    text-align: left;
    font-size: 14px;
    color: #222333;
  }
`;
const LoginInput = styled.input`
  border: 1px solid #808080;
  border-radius: 4px;
  height: 40px;
  width: 99%;
  margin-bottom: 10px;
  outline: none;
  padding: 5px;
`;
const ForgetPassword = styled.p`
  color: #461a06;
  text-align: right;
  font-size: 24px;
  margin-bottom: 20px;
`;
const LoginButton = styled.button`
  background: #ceceda;
  border-radius: 4px;
  color: #bd0c0c;
  outline: none;
  border: 1px solid #808080;
  width: 100%;
  height: 40px;
  cursor: pointer;
  font-weight: 600;
  :hover {
    background: #fff;
    color: #222333;
  }
`;
const Logo = styled.img`
  width: 50%;
  margin: 10px;
  margin: auto;
`;
const Head3 = styled.h3`
  color: #165716;
  font-size: 28px;
`;

export const SchoolLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [token, setToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const history = useHistory();

  const saveUserInfo = response => {
    saveData("user", response.data);
    setToken(response.token);
    console.log("successfull");
  };
  if (token && isAuth) {
    return <Redirect push to="/" />;
  }

  const LoginToAccount = () => {
    const payload = {
      email: email,
      password: password
    };
    console.log(payload);
    axios
      .post("http://localhost:8000/school/signin", payload)
      .then(res => {
        setIsAuth(true);
        saveUserInfo(res.data);
      })
      .catch(err => setErr(true));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Container>
        <RightCol>
          <LoginDetails>
            <Head3>Log In To Your Account</Head3>
            <br />
            <br />
            <LoginInput onChange={e => setEmail(e.target.value)} placeholder="Username" />
            <br />
            <LoginInput onChange={e => setPassword(e.target.value)} placeholder="Password" />
            {err && <p style={{ color: "#2c632c" }}>Either email or password isincorrect.</p>}
            <ForgetPassword style={{ color: "#2c632c" }}>Forget Password?</ForgetPassword>
            <LoginButton onClick={LoginToAccount}>School Login</LoginButton>
          </LoginDetails>
          <div
            style={{
              textAlign: "center"
            }}
          >
            <div
              style={{
                width: "12%",
                margin: "auto",
                display: "flex",
                gap: "10px"
              }}
            />
            <p
              onClick={() => history.push("/register-school")}
              style={{ color: "#2c632c", fontSize: "30px", cursor: "pointer" }}
            >
              Need an account ? Sign up
            </p>
          </div>
        </RightCol>
      </Container>
    </>
  );
};
