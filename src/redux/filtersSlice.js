import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
		names: "",
    },
    reducers: {
      changeFilter: (state, action) => { 
        state.names=action.payload
        }
	}
})

export const selectNameFilter = state => state.filters.names;

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;