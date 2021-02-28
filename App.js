import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./src/store";
import Navigation from "./src/navigation";
import "react-native-gesture-handler";
const store = createStore(rootReducers, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


