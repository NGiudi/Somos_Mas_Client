import { createSlice } from '@reduxjs/toolkit';

const organizationSlice = createSlice({
  name: 'organization',
  initialState: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    adress: "",
    email: "",
    phone: "",
    city: ""
  },
  reducers: {
    setOrganization: (state, action) => {
      state.instagram = action.payload?.instagramURL?? "https://www.instagram.com/";
      state.linkedin = action.payload?.linkedinURL?? "https://www.linkedin.com/";
      state.facebook = action.payload?.facebookURL?? "https://www.facebook.com/";
      state.adress = action.payload?.adress?? "";
      state.email = action.payload?.email?? "";
      state.phone = action.payload?.phone?? "";
      state.city = action.payload?.city?? "";
    },
  }
});

// Action creators are generated for each case reducer function
export const { setOrganization } = organizationSlice.actions;

export default organizationSlice.reducer;