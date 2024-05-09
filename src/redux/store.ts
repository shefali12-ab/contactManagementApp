import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./UserReducer";

const store = configureStore({
  reducer: contactsReducer,
});

export default store;
