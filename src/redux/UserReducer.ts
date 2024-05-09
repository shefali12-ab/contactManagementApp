// reducers.js
import { createSlice } from "@reduxjs/toolkit";

const userList: never[] =[]

const userSlice = createSlice({
  name:"users",
  initialState: userList,
  reducers:{
    addUser : (state,action)=> {
     // console.log(action)
     state.push(action.payload);
    },
    editUser : (state,action) =>{
     const {id,firstname, lastname, mobile, status} = action.payload
     const uu= state.find(user => user.id == id)
      if(uu){
        uu.firstname= firstname
        uu.lastname=lastname
        uu.mobile=mobile
        uu.status=status
      }
    },
    deleteUser : (state,action) =>{
      const {id} = action.payload
      const uu= state.find(user => user.id == id)
      if(uu)
        {
          return state.filter ( f=> f.id !== id)
        }
    }
  }
})
export const {addUser , editUser , deleteUser} = userSlice.actions
export default userSlice.reducer