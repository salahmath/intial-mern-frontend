


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import "./index.css"
// Création de la racine avec ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application à l'intérieur de la racine avec le fournisseur Redux
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);