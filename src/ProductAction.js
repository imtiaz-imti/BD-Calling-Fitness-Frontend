import axios from "axios"
export const getUserDetails = (userID)=> async (dispatch)=>{
    try {
        const {data} = await axios.get(`http://localhost:4000/api/v1/user/${userID}`)
        dispatch({type:'set_user',payload:data.newUser})
    } catch (error) {
        dispatch({type:'user_fail',payload:null})
    }
}
export const requestTrainerList = (userID)=> async (dispatch)=>{
    try {
        const {data} = await axios.get(`http://localhost:4000/api/v1/request/trainer/list/${userID}`)
        dispatch({type:'set_request_list',payload:data.data})
    } catch (error) {
        dispatch({type:'user_fail',payload:null})
    }
}
export const availableTrainerList = (userID,s,e,t)=> async (dispatch)=>{
    try {
        const {data} = await axios.get(`http://localhost:4000/api/v1/available/trainer/list/${userID}/${s}/${e}/${t}`)
        // console.log(data)
        dispatch({type:'set_new_list',payload:data.data})
    } catch (error) {
        dispatch({type:'user_fail',payload:null})
    }
}
export const bookTrainerList = (userID)=> async (dispatch)=>{
    try {
        const data = await axios.get('http://localhost:4000/api/v1/book/trainer/list')
        dispatch({type:'set_book_list',payload:data.data.data})
    } catch (error) {
        dispatch({type:'user_fail',payload:null})
    }
}
export const allTrainerList = (userID)=> async (dispatch)=>{
    try {
        const {data} = await axios.get(`http://localhost:4000/api/v1/all/trainer/list/${userID}`)
        dispatch({type:'set_all_list',payload:data.data})
    } catch (error) {
        dispatch({type:'user_fail',payload:null})
    }
}
export const requestAdminList = (userID)=> async (dispatch)=>{
    try {
        const {data} = await axios.get(`http://localhost:4000/api/v1/request/admin/list/${userID}`)
        dispatch({type:'set_admin_list',payload:data.data})
    } catch (error) {
        dispatch({type:'user_fail',payload:null})
    }
}
