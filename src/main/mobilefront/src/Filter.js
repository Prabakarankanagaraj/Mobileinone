import { useState } from "react"
import { onsubmitShortList } from "./Connect"
import { Result } from "./Result"

export const Filter=()=>{

    const[result,setResult]=useState(false)
    const[tempresult,setTempresult]=useState([])

    const[short,setShort]=useState({
        "brand":"",
        "cost":0,
        "megaArms":0
    })

    const onCollect=(old)=>{
        const{name,value}=old.target
        setShort((remain)=>{
            return{
                ...remain,
                [name]:value
            }
        })
    }

    const doFilter=async()=>{
      const tmp=await onsubmitShortList(short)
      if(tmp.data){
        if(tmp.data!="err"){
            setResult(true)
            setTempresult(tmp.data)
        }
        else{
            alert(tmp.data)
            setResult(false)
        }
      }  
      else{
        setResult(false)
      }
    }
    
    return(
        <>
                {
                    (result)?
                    <>
                    <Result show={tempresult}/>

                    </>
                    :
                    <>
                    <div className="container mt-4">
                        <h1 className="text-center text-danger display-4">Filter</h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8 col-sm-12 p-3 rounded-2 shadow" style={{backgroundColor:"white"}}>
                                <div className="form-group">
                                    <label>Filter by MegaArms</label>
                                    <input onChange={onCollect} value={short.megaArms} type="text" name="megaArms" placeholder="filter to megaArms" className="form-control" />
                                </div>
                            <h1 className="text-center display-5">Or</h1>   
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                <label>Filter by Brand</label>
                                    <input onChange={onCollect} value={short.brand} type="text" name="brand" placeholder="filter to brand" className="form-control" />
                                </div>

                                <div className="col-lg-6 col-sm-12">
                                <label>Filter by cost</label>
                                    <input onChange={onCollect} value={short.cost} type="text" name="cost" placeholder="filter to cost" className="form-control" />
                                </div>                                 
                            </div> 
                            <div className="row justify-content-center">
                                <button className="btn btn-outline-info col-2" onClick={doFilter}>
                                <i class="bi bi-funnel-fill"></i>
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