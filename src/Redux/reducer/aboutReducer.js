import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        about: undefined,
        loading: false,
        error: null,
    },
    reducers: {
        fetchAboutStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchAboutSuccess: (state, action) => {
            state.about = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchAboutFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchAboutStart,
    fetchAboutSuccess,
    fetchAboutFailure,
} = aboutSlice.actions;

export default aboutSlice.reducer;