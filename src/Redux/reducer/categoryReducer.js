import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchCategoryStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchCategorySuccess: (state, action) => {
            state.category = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchCategoryFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchCategoryStart,
    fetchCategorySuccess,
    fetchCategoryFailure,
} = categorySlice.actions;

export default categorySlice.reducer;