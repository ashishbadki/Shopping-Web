import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        state.push(action.payload); // only add if not already in cart
      }
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// export const CartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     add: (state, action) => {
//       state.push(action.payload);
//     },
//     remove: (state, action) => {
//       return state.filter(item => item.id !== action.payload.id);
//     },
//   }
// });

// export const { add, remove } = CartSlice.actions;
// export default CartSlice.reducer;
