// FILL HERE 3.3
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;