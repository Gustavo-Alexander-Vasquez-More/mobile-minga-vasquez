//las acciones representan cambios en el estado de la aplicación
// los reducers especifican cómo se deben realizar esos cambios. <===
import { createReducer } from "@reduxjs/toolkit";
import {
  setFilters,
  setCategories,
  setMangas,
  setPagination,
} from "../actions/mangas.js";
//objeto que representa los mangas
const initialState = {
  filters: {
    title: "",
    categoriesSelected: [],
    page: 1,
  },
  categories: [],
  mangas: [],
  pagination: {},
};
//builder proporciona métodos para agregar casos de acciones
//se especifica cómo se debe actualizar el estado en respuesta a cada accion.
const mangasReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilters, (state, action) => {
      state.filters = {
        ...state.filters, //hacer new state
        ...action.payload,
      };
      
      console.log(action.payload);
    })
    .addCase(setCategories, (state, action) => {
      state.categories = action.payload;
    })
    .addCase(setMangas, (state, action) => {
      state.mangas = action.payload;
    })
    .addCase(setPagination, (state, action) => {
      state.pagination = action.payload;
    })
});

export default mangasReducer;