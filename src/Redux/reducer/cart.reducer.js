import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    message: null,
    error: null,
    data: [],


};

const checkOutReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        loadingCart(state) {
            state.loading = true;
            state.error = null;
            state.message = null;
        },
        addToCart(state, action) {
            if (state.data.some(obj => obj.item_id === action.payload.item_id)) {
                state.data = state.data.map((item, index) => {
                    if (item.item_id === action.payload.item_id) {
                        return { ...item, quantity: item.quantity + action.payload.quantity }
                    }
                    return item;
                })
            } else {
                state.data = [...state.data, action.payload]
            }
            state.message = "Successfully added to cart"
            state.loading = false;
        },
        removeFromCart(state, action) {
            state.data = [...state.data, state.data.filter((item, index) => index !== action.payload.index)];

        },
        updateCart(state, action) {
            state.cart = action.payload
        },
        clearCartError(state) {
            state.error = null;
        },
        clearCartMessage(state) {
            state.message = null;
        }
    },
});

export const { addToCart, removeFromCart, updateCart, clearCartMessage, clearCartError, loadingCart } = checkOutReducer.actions;

export default checkOutReducer.reducer;
