import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: JSON.parse(sessionStorage.getItem("theme")) ?? "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
      sessionStorage.setItem(JSON.stringify("theme", action.payload));
    },
  },
});

export default themeSlice.reducer;

export const setTheme = (value) => {
  return (dispatch) => {
    dispatch(themeSlice.actions.setTheme(value));
  };
};
