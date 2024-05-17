import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalogSlice'; 

const rootReducer = combineReducers({
  catalog: catalogReducer
});

export const store = configureStore({
  reducer: rootReducer
});