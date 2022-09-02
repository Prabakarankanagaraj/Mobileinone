import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitDeleteFilter } from "./Connect"

export const Remove=()=>{

    const n=useNavigate()

    const[remove,setRemove]=useState("")

    const get=(eve)=>{
        setRemove(eve.target.value)
    }
    const onRemove=async()=>{
        const tmp=await onSubmitDeleteFilter(remove)
        alert(JSON.stringify(tmp.data))
        n("/view")
    }
    return(
        <>
        <div className="container mt-3">
            <h1 className="text-center text-dark display-3">To Remove the Stocks</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-12 p-5 shadow rounded-3" style={{backgroundColor:"white"}}>
                    <div className="form-group">
                        <label>Type to Delete</label>
                        <input type="text" name="brand" placeholder="Brand Name" value={remove.brand} onChange={get} className="form-control"/>
                    </div>
                    <button className="btn btn-outline-info mt-3 col-2" onClick={onRemove}>
                    <i class="bi bi-trash3-fill"></i>
                    </button>

                </div>

            </div>

          </div>

         
        </>
    )
}