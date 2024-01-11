import { useState } from 'react'
import SignUp from '../SignUp'
import LoginForm from '../Login'
import Logos from '../Logos'

function Page(){
    const [display,setDisplay]=useState(true)
    return(
        <form className='border-2 border-black w-96 rounded-xl bg-white mx-10 my-6 flex flex-col justify-center py-2 px-8'>
        <Logos/>
        {
          display?<LoginForm disply={display} setDisplay={setDisplay}/>:<SignUp disply={display} setDisplay={setDisplay}/>
        }
        </form>
    )
}

export default Page