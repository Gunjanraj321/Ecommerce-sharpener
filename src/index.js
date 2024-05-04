import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/appStore";
// import LoginTime from "./components/LoginTime";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

let persister = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
    <Router>
      {/* <LoginTime /> */}
      <App />
    </Router>
    </PersistGate>
  </Provider>
);
