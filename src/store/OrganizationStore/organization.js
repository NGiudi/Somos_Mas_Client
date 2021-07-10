import { createSlice } from '@reduxjs/toolkit';

const organizationSlice = createSlice({
  name: 'organization',
  initialState: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
  },
  reducers: {
    setOrganization: (state, action) => {
      state.instragram = action.payload.instragram;
      state.linkedin = action.payload.linkedin;
      state.facebook = action.payload.facebook;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setOrganization } = organizationSlice.actions;

export default organizationSlice.reducer;