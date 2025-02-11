import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { page: "", menu: true },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { setPage, setMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
