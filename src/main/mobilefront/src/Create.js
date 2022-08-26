import { useState } from "react"
import { onSubmitCreate } from "./Connect"

export const Create=()=>{

    const[create,setCreate]=useState({
        "brand":"",
        "model":"",
        "cost":0,
        "megaArms":0

    })

    const getter=(obj)=>{
        const{name,value}=obj.target
        setCreate((old)=>{
            return{
            ...old,
            [name]:value
            }
        })
    }
    const onSubmit=async()=>{

        const tmp=await onSubmitCreate(create)
        alert(JSON.stringify(tmp.data))

    }

    const onCancel=()=>{
        setCreate(()=>{
            return{
                "brand":"",
                "model":"",
                "cost":0,
                "megaArms":0
            }
        })
    }
    return(
        <>
         <div className="container mt-3" style={{backgroundColor:"lightgray"}}>
         <h1 className="text-dark text-center">Add New a Stock</h1>
         <div className="row justify-content-center mt-3">
            <div className="col-lg-4 col-md-10 col-sm-12  p-4" style={{backgroundColor:"ButtonHighlight",borderRadius:"30px",boxShadow:"5px 7px 7px 6px white"}}>
                <div className="row">
                    <label>Brand</label>
                    <input type="text" name="brand" onChange={getter} value={create.brand} className="form-control" placeholder="Enter your Brand Name"></input>
                </div>
                <div className="row">
                    <label>Mobile Model</label>
                    <input type="text" name="model" onChange={getter} value={create.model} className="form-control" placeholder="Enter your Mobile Model"></input>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <label>Mobile Cost</label>
                        <input type="text" name="cost" onChange={getter} value={create.cost} className="form-control" placeholder="Enter your cost of mobile"></input>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <label>Mobile MegaArms</label>
                        <input type="text" name="megaArms" onChange={getter} value={create.megaArms} className="form-control" placeholder="Enter your megaArms of mobile"></input>
                    </div>
                    <div className="row justify-content-around mt-3">
                        <button className="btn btn-outline-success col-2" onClick={onSubmit}>
                        <i class="bi bi-upload"></i>
                        </button>
                        <button className="btn btn-outline-danger col-2" onClick={onCancel}>
                        <i class="bi bi-x"></i>
                        </button>
                    </div>

                </div>

            </div>

         </div>
         </div>
         
        </>
    )
}