import { Routes,Route } from "react-router-dom"
import User from "../User/User"
import Page from "../Page/Page"


function Customroutes(){
    return(
        <>
        <Routes>
            <Route path="/user" element={<User/>}/>
            <Route path="/" element={<Page/>}/>
        </Routes>
        </>
    )
}

export default Customroutes