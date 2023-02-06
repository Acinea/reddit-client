import { configureStore } from '@reduxjs/toolkit';
import {default as SearchBarSliceReducer} from '../features/SearchBar/searchbarSlice';

export const store = configureStore({
  reducer: {
    searchbar: SearchBarSliceReducer,
    }
});
