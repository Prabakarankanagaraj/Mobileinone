import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { onSubmitRead, onSubmitUpdate } from "./Connect"

export const Update=()=>{
    const{edit}=useParams()

    const[update,setUpdate]=useState({})

    const onRead=async()=>{
        const tmp=await onSubmitRead(edit)
        setUpdate(tmp.data)
    }

    useEffect(()=>{
        onRead()
    },[])

    const getter=(obj)=>{
        const{name,value}=obj.target
        setUpdate((old)=>{
            return{
            ...old,
            [name]:value
            }
        })
    }

    const onUpdate=async()=>{
        const tmp=await onSubmitUpdate(update)
        alert(JSON.stringify(tmp.data))

    }

    const onCancel=()=>{
        setUpdate(()=>{
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
         <div className="container mt-3">
         <h1 className="text-dark text-center">Add New a Stock</h1>
         <div className="row justify-content-center mt-3">
            <div className="col-lg-4 col-md-10 col-sm-12  p-4">
                <div className="row">
                    <label>Brand</label>
                    <input type="text" name="brand" onChange={getter} value={update.brand} className="form-control" placeholder="Enter your Brand Name"></input>
                </div>
                <div className="row">
                    <label>Mobile Model</label>
                    <input type="text" name="model" onChange={getter} value={update.model} className="form-control" placeholder="Enter your Mobile Model"></input>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12" style={{backgroundColor:"white"}}>
                        <label>Mobile Cost</label>
                        <input type="text" name="cost" onChange={getter} value={update.cost} className="form-control" placeholder="Enter your cost of mobile"></input>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <label>Mobile MegaArms</label>
                        <input type="text" name="megaArms" onChange={getter} value={update.megaArms} className="form-control" placeholder="Enter your megaArms of mobile"></input>
                    </div>
                    <div className="row justify-content-around mt-3">
                        <button className="btn btn-outline-success col-2" onClick={onUpdate}>
                        <i class="bi bi-chevron-double-up"></i>
                        </button>
                        <button className="btn btn-outline-danger col-2" onClick={onCancel}>
                        <i class="bi bi-arrow-return-left"></i>
                        </button>
                    </div>

                </div>

            </div>

         </div>
         </div>
         
        </>
    )
}