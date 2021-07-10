import { configureStore } from '@reduxjs/toolkit';

import organizationReducer from './OrganizationStore/organization';
import userReducer from './UserStore/UserStore';

export default configureStore({
  reducer: {
    organization: organizationReducer,
    user: userReducer
  }
});