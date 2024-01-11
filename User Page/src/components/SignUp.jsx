import PropTypes from "prop-types";
import { useState } from "react";

function SignUp({ setDisplay }) {

    const [name,setName]=useState("")
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [bio,setBio]=useState("")

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const resp = await fetch("http://localhost:5010/api/auth/signup", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({name,username,email,password,bio})
            })

            const data = await resp.json()
            //console.log(data)
            if (data.success) {
                alert("Registration Successfully.Please Log In now.")
                setDisplay(true)
            }else{
                alert(`${data.message}`)
            }
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
      <input
        type="text"
        placeholder="Name"
        className="border-2 p-2 w-80 "
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="UserName"
        className="border-2 p-2 w-80 "
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="border-2 p-2 w-80 "
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border-2 p-2 w-80 "
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bio"
        className="border-2 p-2 w-80 "
        value={bio}
        onChange={(e)=>setBio(e.target.value)}
      /><br/>
      <button
        className="bg-sky-500 text-white p-1 w-80 font-bold my-2"
        type="submit"
        onClick={ registerUser}
      >
        Sign Up
      </button>
      <div className="flex py-2 justify-center">
        <p>Have an account?</p>
        <p
          className="text-blue-600 cursor-pointer px-2"
          onClick={() => setDisplay(true)}
        >
          Log In
        </p>
      </div>
    </>
  );
}

SignUp.propTypes = {
  setDisplay: PropTypes.func.isRequired,
};

export default SignUp;
