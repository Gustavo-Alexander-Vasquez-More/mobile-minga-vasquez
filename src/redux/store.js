import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "../redux/reducers/mangas.js"
export const store = configureStore({
    reducer: {
      mangas: mangasReducer,
    },
})