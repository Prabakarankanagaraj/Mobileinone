import { useState } from "react"
import { onsubmitLogin } from "./Connect"
import { SignUp } from "./SignUp"

export const Login=()=>{

    const[sign,setSign]=useState(false)

    const[person,setPerson]=useState({
        "username":"",
        "password":""
    })
    const onGather=(eve)=>{
        const{name,value}=eve.target
        setPerson((old)=>{
            return{
                ... old,
                [name]:value
            }
        })
    }
    
    const onLog=async()=>{
        await onsubmitLogin(person)
        window.location.assign("/")
    }

    const onRes=()=>{
        setPerson(()=>{
            return{
                "username":"",
                "password":""
            }
        })
    }
    return(
        <>
        {
            (sign)?
            <>
            <SignUp/>
            </>
            :
            <>
             <div className="container mt-5">
                <div className="row justify-content-center">
                <h1 className="text-center text-dark mt-2 display-1">Hello Welcome'</h1>
                <div className="col-lg-4 col-md-10 col-sm-12 shadow p-3 rounded-4  mt-3" style={{backgroundColor:"white"}}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" onChange={onGather} value={person.username} name="username" placeholder="Enter your User Name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={onGather} value={person.password} name="password" placeholder="Enter your password" className="form-control"/>
                    </div>
                    <div className="row justify-content-around mt-3">
                        <button className="btn btn-outline-primary col-2" onClick={onLog}>
                            <i class="bi bi-airplane-engines-fill"></i>
                        </button>
                        <button className="btn btn-outline-dark col-2" onClick={onRes}>
                            <i class="bi bi-arrow-clockwise"></i>
                        </button>
                    </div>
                    <div className="mt-2 row justify-content-center">
                    <button className="col-4 btn btn-secondary" onClick={()=>{
                        setSign(true)
                    }}>
                        New User?
                    </button>
                    </div>
                </div>

            </div>
           
            </div>
        </>
        }
        


        </>
    )
}