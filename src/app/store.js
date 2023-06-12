import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/product/ProductSlice';

export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
