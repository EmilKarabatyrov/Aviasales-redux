import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import sortReducer from "./sortSlice";
import ticketsReducer from "./ticketsSlice";
import networkReducer from "./networkSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortReducer,
    tickets: ticketsReducer,
    network: networkReducer,
  },
});
