import { useEffect, useState } from "react";
import "./User.css"
import { useNavigate } from "react-router-dom";

function User(){
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [bio,setBio]=useState("")
    const navigate=useNavigate()

    const userData = async() =>{
        try {
         const resp = await fetch("http://localhost:5010/api/auth/user",{
             method:"GET",
             credentials:"include"
         });
         if(resp.status!==200){navigate("/")}
         const {data} = await resp.json();
         setUsername(data.username);
         setEmail(data.email);
         setBio(data.bio)
         
        } catch (error) {
             console.log(error.message)
             navigate("/")
        }
     } 
 
     useEffect(()=>{
        userData()
     },[])
        

     const logout=async()=>{
        try {
         const response = await fetch("http://localhost:5010/api/auth/logout",{
             method:"GET",
             credentials:"include"
         });
         
         const data=await response.json()
         
          if(data.success){
             console.log(data)
             alert(`${data.message}`)
             navigate("/")
          }
    
        } catch (error) {
         console.log(error)
        }
     }


    return(
        <>
    <nav>
        <button id="logout" onClick={logout}>Logout</button>
    </nav>
    <div id="main">
        <div id="section">
            <img src="https://img.freepik.com/free-photo/retinal-biometrics-technology-with-man-s-eye-digital-remix_53876-108518.jpg?size=626&ext=jpg&ga=GA1.1.525968856.1702969144&semt=ais" width="150x" height="150px"/><br/>
                <h2 id="userName">{username}</h2>
           <p id="userBio">{bio}</p>
           <p id="userEmail">{email}</p>
           <p id="follow">Followers:1000</p>
        </div>
    </div> 
        </>
    )
}


export default User