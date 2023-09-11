import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async(e)=>{
    e.preventDefault()
    console.log('Email:',email);
    console.log('Password:',password);

    try {
      await axios.post("http://localhost:4000/",{
        email,password
      })
      .then((res) => {
        if ((res.data == "exist")) {
          alert("user already exists");
        } else if ((res.data =="not exist")) {
          history("/login");
        }
      })
      .catch((e) => {
        alert("wrong details");
        console.log(e);
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Register Form</h1>
      <form action="POST">
        Email:{" "}
        <input
          type="email"
          name="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        /> <br />
        Password:{" "}
        <input
          type="password"
          name="password"
          placeholder="enterpassword"
          onChange={(e) => setPassword(e.target.value)}
        /> <br />
        <button onClick={submit}>Register</button>
        
        <p>OR</p>
        <Link to='/login'><button>Login</button></Link>
      </form>
    </div>
  );
};

export default Register;
