import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 0,
    lastname: "",
    imageUrl: "",
    email: "",
    name: "",
    roleId: 0,
    role: "",
  },
  reducers: {
    login: (state, action) => {
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.role = action.payload.role.role;
      state.roleId = action.payload.roleId;
      state.id = action.payload.id;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.lastname = "";
      state.email = "";
      state.name = "";
      state.role = "";
      state.roleId = 0;  
      state.id = 0; 
    },
    editUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.lastname = action.payload.lastname;
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout, editUser } = userSlice.actions

export default userSlice.reducer