import axios from "axios"

const auth="katran:praba"
const token=btoa(auth)

export const onSubmitCreate=async(object)=>{
    try{
        const t=await axios.post(`/api/new`,object,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }


}

export const onSummitList=async()=>{
    try{
        const t=await axios.get(`/api/`,{
            headers:{
                "Authorization":` Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitRead=async(id)=>{
    try{
        const t=await axios.get(`/api/${id}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }

}

export const onSubmitUpdate=async(object)=>{
    try{
        const t=await axios.put(`/api/up`,object,{
            headers:{
                "Authorization":` Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }

}
export const onSubmitDelete=async(ref)=>{
    try{
        const t = await axios.delete(`/api/delid/${ref}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onsubmitShortList=async(object)=>{
    try{
        if(object.megaArms!=0&&object.brand==""&&object.cost==0){
            const t=await axios.get(`/api/bywhat/${object.megaArms}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.getItem("user")}`
                }
            })
            return t
        }
        else if(object.megaArms==0&&object.brand!=""&&object.cost!=0){
            const t=await axios.get(`/api/bytwo/${object.brand}/${object.cost}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.getItem("user")}`
                }
            })
            return t
        }
        else{
            return{"err":"Invalid Filter Call"}
        }
    }
    catch(err){
        alert(err)
    }

}

export const onSubmitUpdateFilter=async(obj)=>{
    try{
        const t=await axios.put(`/api/byups/${obj}`,{
            headers:{
                "Authorization":` Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }

}

export const onSubmitDeleteFilter=async(obj)=>{
    try{
        const t=await axios.delete(`/api/delall/${obj}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t

    }
    catch(err){
        alert(err)
    }
}

export const onsubmitSignUp=async(obj)=>{
    try{
        const t=await axios.post(`/api/signup`,obj)
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onsubmitLogin=async(obj)=>{
    const credential=obj.username+":"+obj.password
    const tok=btoa(credential)
    try{
        const t=await axios.get(`/api/`,{
            headers:{
                "Authorization":`Basic ${tok}`
            }
        })
        if(t.data){
            sessionStorage.setItem("user",tok)
            return
        }
      
    }
    catch(err)
    {
        alert(err)
    }
}

export const onsubmitLogout=async()=>{
    try{
        const t=await axios.get(`/login?logout`)
        sessionStorage.removeItem("user")
        return
    }
    catch(err)
    {
        alert(err)
    }
}