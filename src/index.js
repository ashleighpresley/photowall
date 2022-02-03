import React from "react";
import ReactDOM from "react-dom";
import "./styles/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";
import App from "./Components/App";

//pass in reducer to createStore which defines how data will be updated, can take in multiple reducers but will consilidate them into one root reducer
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
