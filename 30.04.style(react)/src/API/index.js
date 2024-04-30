

import axios from "axios";
import { BASE_URL } from "./base.js";

//GETALL
export async function getAll(){
let result = {data:null,error:null}
await axios
.get(BASE_URL)
.then(res=>{
    result ={...result,data:res.data}
})
.catch((err)=>{
    result = {...result,error:err}
 
})
return result
}

//GET
export async function getOne(id){
    let result = {data:null,error:null}
    await axios 
    .get(BASE_URL+`/${id}`)
    .then(res=>{
        result = {...result,data:res.data}
    })
    .catch((err)=>{
        result = {...result,error:err}
    })
}

//DELETE
export async function deleteOne(id){
let result = {data:null,err:null}
await axios
.delete(BASE_URL+`/${id}`)
.then((res)=>{
    result = {...result,data:res.data}
}).catch((err)=>{
    result = {...result,error:err}
})
}


//post
export async function post( payload) {
    let result = { data: null, error: null };
    await axios
      .post(BASE_URL , payload)
      .then((res) => {
        result = { ...result, data: res.data };
      })
      .catch((err) => {
        result = { ...result, error: err };
      });
  
    return result;
}

//put
export async function putOne(id, payload) {
    let result = { data: null, error: null };
    await axios
      .put(BASE_URL  + `/${id}`, payload)
      .then((res) => {
        result = { ...result, data: res.data };
      })
      .catch((err) => {
        result = { ...result, error: err };
      });
  
    return result;
}

//patch
export async function patchOne(id, payload) {
    let result = { data: null, error: null };
    await axios
      .patch(BASE_URL  + `/${id}`, payload)
      .then((res) => {
        result = { ...result, data: res.data };
      })
      .catch((err) => {
        result = { ...result, error: err };
      });
  
    return result;
}