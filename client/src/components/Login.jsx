import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit =async (e)=>{
    e.preventDefault()
    console.log('Email:',email);
    console.log('Password:',password);
    try {
      await axios.post("http://localhost:4000/",{
        email,password
      })
      .then(res=>{
        if(res.data == "exist"){
          history("/home",{state:{id:email}})
        }else if(res.data == "not exist"){
          alert("user not exists")
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Login Form</h1>
      <form action="POST">
        Email:{" "}
        <input
          type="email"
          name="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        /> <br /> <br />
        Password:{" "}
        <input
          type="password"
          name="password"
          placeholder="enterpassword"
          onChange={(e) => setPassword(e.target.value)}
        /> <br /> <br />
       <button onClick={submit}>Login</button>
        
        <p>OR</p>
        <Link to='/'><button>Register</button></Link>

      </form>
    </div>
  );
};

export default Login;
