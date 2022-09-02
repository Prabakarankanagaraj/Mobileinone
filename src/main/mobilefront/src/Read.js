import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { onSubmitRead } from "./Connect"

export const Read=()=>{

    const {key}=useParams()

    const[read,setRead]=useState({})

    const onRead=async()=>{
        alert(key)
        const tmp=await onSubmitRead(key)
        setRead(tmp.data)
    }

    useEffect(()=>{
        onRead()
    },[])
    return(
        <> 
        <div className="alert alert-success text-center">
            <h1 className="alert-heading text-center">Details of Mobile</h1>
            <div className="row justify-content-center">
                <p>{read.mobId}</p>
                <p>{read.brand}</p>
                <p>{read.model}</p>
                <p>{read.cost}</p>
                <p>{read.megaArms}</p>
            </div>


        </div>
        </>
    )
}