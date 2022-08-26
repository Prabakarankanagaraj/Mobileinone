import axios from "axios"

const auth="katran:praba"
const token=btoa(auth)

export const onSubmitCreate=async(object)=>{
    try{
        const t=await axios.post(`/api/new`,object,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }


}