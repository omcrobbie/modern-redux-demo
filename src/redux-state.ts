import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

const personSlice = createSlice({
  name: "person",
  initialState: {
    age: 0,
    firstName: "",
    lastName: ""
  },
  reducers: {
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setFirstname: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastname: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    }
  }
});

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    person: personSlice.reducer
  }
});
type AppStore = ReturnType<typeof store.getState>;

export const actions = bindActionCreators(
  {
    ...counterSlice.actions,
    ...personSlice.actions
  },
  store.dispatch
);

export const useStore: TypedUseSelectorHook<AppStore> = useSelector;
