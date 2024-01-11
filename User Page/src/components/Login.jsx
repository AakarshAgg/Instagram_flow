import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ setDisplay }) {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const loginUser = async (e) => {
      e.preventDefault();
        try {
          const resp = await fetch("http://localhost:5010/api/auth/signin", {
            method: "POST",
            credentials: 'include',
            redirect: 'follow',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({username,password})
          })
    
          const data = await resp.json();
          if (data.success) {
            console.log(data)
           alert(`${data.message}`)
           navigate("/user");
          }else{
            alert(`${data.message}`)
          }
    
        } catch (error) {
          console.log(error.message)
        }
      }

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        className="border-2 p-2 w-80 "
        onChange={(e)=>setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        placeholder="password"
        className="border-2 p-2 w-80 "
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
      />
      <br />
      <button
        className="bg-sky-500 text-white p-1 w-80 font-bold my-2"
        type="submit"
        onClick={loginUser}
      >
        Sign in
      </button>
      <div className="flex py-4 justify-center">
        <p>Don&apos;t have an account?</p>
        <a
          className="text-blue-600 cursor-pointer px-2"
          onClick={() => setDisplay(false)}
        >
          Sign Up
        </a>
      </div>
    </>
  );
}

LoginForm.propTypes = {
  setDisplay: PropTypes.func.isRequired,
};

export default LoginForm;
