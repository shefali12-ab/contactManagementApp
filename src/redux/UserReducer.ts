// reducers.js
import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string;
  status: string;
  
}
const userList: any =[]

const userSlice = createSlice({
  name:"users",
  initialState: userList,
  reducers:{
    addUser : (state,action)=> {
     // console.log(action)
    
     if(action.payload.firstname=="" || action.payload.lastName=="" || action.payload.mobile==""){
      alert("Please fill empty fields")
     }else{
      state.push(action.payload);
     }
     
    },
    editUser : (state,action) =>{
     const {id,firstname, lastname, mobile, status} = action.payload
     const uu= state.find((user :User) => user.id == id)
      if(uu){
        uu.firstname= firstname
        uu.lastname=lastname
        uu.mobile=mobile
        uu.status=status
      }
    },
    deleteUser : (state,action) =>{
      const {id} = action.payload
      const uu= state.find((user:User) => user.id == id)
      if(uu)
        {
          return state.filter ( (f:any)=> f.id !== id)
        }
    }
  }
})
export const {addUser , editUser , deleteUser} = userSlice.actions
export default userSlice.reducer
