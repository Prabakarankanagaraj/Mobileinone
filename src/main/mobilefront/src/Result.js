import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitDelete } from "./Connect"
import { List } from "./List"

export const Result=(prop)=>{
    const navi=useNavigate()
    const[stock,setStock]=useState(prop.show)
    return(
        <>
         <div className="container mt-5">
             <h1 className="text-center text-success display-5">Available Stock</h1>
             <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12 p-3 shadow rounded-3">
                   {
                    (typeof(stock[0])==="string")?
                    <>
                     <div className="d-flex flex-row flex-nowrap overflow-auto">
                        {
                            stock.map((str)=>(
                                <div className="card p-5  shadow rounded-5">
                                    <h1 className="card-title display-4">{str}</h1>

                                </div>
                            ))
                        }

                     </div>
                    </>
                    :
                    <>
                   <div className="table-responsive">
                        <table className="table table-hover text-nowrap">
                        <thead>
                            <tr>
                            <th>Mobile ID</th>
                            <th>Mobile Brand</th>
                            <th>Mobile Model</th>
                            <th>Mobile Cost</th>
                            <th>Mobile MegaArms</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                stock.map((obj,pos)=>(
                                    <tr>
                                        <td>
                                            <a className="btn btn-info" href={`/#/open/${obj.mobId}`}>
                                                {obj.mobId}
                                            </a>
                                        </td>
                                        <td>{obj.brand}</td>
                                        <td>{obj.model}</td>
                                        <td>{obj.cost}</td>
                                        <td>{obj.megaArms}</td>
                                        <td>
                                            <a className="btn btn-outline-warning" href={`/#/modify/${obj.mobId}`}>
                                               <i class="bi bi-box-arrow-up-right"></i>Edit
                                            </a>
                                            <button className="btn btn-outline-danger ms-2" onClick={async()=>{
                                               const tmp=await onSubmitDelete(obj.mobId)
                                               alert(tmp.date)
                                               navi("/#/view") 
                                            }}>
                                              <i class="bi bi-eraser"></i>Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))

                            }
                        </tbody>
                      </table>
                    </div>
                    </>
                   }

                </div>

             </div>
         </div>
        </>
    )
}