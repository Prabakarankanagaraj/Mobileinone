import { useState } from "react"
import { onsubmitSignUp } from "./Connect"

export const SignUp=()=>{
    const[user,setUser]=useState({
        "empName":"",
        "username":"",
        "password":"",
        "mobile":0,
        "email":""
    })

    const onCollect=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
            [name]:value
            }
        })

    }
    const onSign=async()=>{
        const tmp=await onsubmitSignUp(user)
        alert(JSON.stringify(tmp.data))
        window.location.assign("/")
    }

    const onReset=()=>{
        setUser(()=>{
            return{
        "empName":"",
        "username":"",
        "password":"",
        "mobile":0,
        "email":""
            }
        })
    }
    return(
        <>
          <div className="container mt-5">
            <h1 className="text-center text-primary display-3">Register Here</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 p-3 shadow rounded-2 " style={{backgroundColor:"white"}}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="empName" value={user.empName} onChange={onCollect} placeholder="Enter your full name" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" name="username" value={user.username} onChange={onCollect} placeholder="Enter your user name" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={user.password} onChange={onCollect} placeholder="Enter your password" className="form-control"></input>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-lg-6 col-sm-12">
                            <label>Mobile Number</label>
                            <input type="text" name="mobile" value={user.mobile} onChange={onCollect} placeholder="Enter your mobile number" className="form-control"></input>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <label>Email Id</label>
                            <input type="text" name="email" value={user.email} onChange={onCollect} placeholder="Enter your Email Id" className="form-control"></input>
                        </div>
                    </div>
                    <div className="row justify-content-around mt-2">
                             <button className="col-1 btn btn-success" onClick={onSign}>
                                <i class="bi bi-person-circle"></i>
                            </button>
                            <button className="col-1 btn btn-dark" onClick={onReset}>
                                <i class="bi bi-slash-circle"></i>
                            </button>

                    </div>

                </div>

            </div>
            

          </div>

        </>
    )
}