import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitUpdateFilter } from "./Connect"

export const Alter=()=>{
    const n=useNavigate()
const[alter,setAlter]=useState("")

const get=(obj)=>{
    setAlter(obj.target.value)
    
}

const onUp=async()=>{
    await onSubmitUpdateFilter(alter)
    n("/view")
}

    return(
        <>
          <div className="container mt-3">
          <h1 className="text-center text-danger display-4">Alter</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-12 p-5 shadow rounded-3" style={{backgroundColor:"white"}}>
                    <div className="form-group">
                        <label>Brand to provide Discount</label>
                        <input type="text" name="brand" placeholder="Brand Name" value={alter.brand} onChange={get} className="form-control"/>
                    </div>
                    <button className="btn btn-outline-info mt-3 col-2" onClick={onUp}>
                    <i class="bi bi-caret-up-square-fill"></i>
                    </button>

                </div>

            </div>

          </div>

        </>
    )
}