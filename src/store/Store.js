import { configureStore } from '@reduxjs/toolkit';

import organizationReducer from './OrganizationStore/organization';

export default configureStore({
  reducer: {
    organization: organizationReducer,
  }
});