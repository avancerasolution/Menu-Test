import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'api',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchDataStart,
    fetchDataSuccess,
    fetchDataFailure,
} = menuSlice.actions;

export default menuSlice.reducer;