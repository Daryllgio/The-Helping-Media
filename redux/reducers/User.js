// src/redux/reducers/user.js
import {createSlice} from '@reduxjs/toolkit';

// Initial state for the user slice
const initialState = {
  orgName: 'The Gwags Organisation',
  userId: 1,
};

// Creating the user slice
export const userSlice = createSlice({
  name: 'user', // Name of the slice
  initialState: initialState, // Initial state
  reducers: {
    // Reducer to update the first name
    updateOrgName: (state, action) => {
      state.orgName = action.payload.orgName;
    },
    // You can add more reducers here for other updates
  },
});

// Exporting the actions
export const {updateOrgName} = userSlice.actions;

// Exporting the reducer to be used in the store
export default userSlice.reducer;
