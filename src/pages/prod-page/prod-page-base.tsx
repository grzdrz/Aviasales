import '../base/base';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReducerManager from "../../storage/ReducerManager";
import ProdPage from './prod-page';

const reducerManager = new ReducerManager();
const store = createStore(reducerManager.reducer);
store.dispatch({
  type: 'default',
});

const appContainer = document.querySelector('.prod-page');
ReactDOM.render(
  <Provider store={store}>
    <ProdPage />
  </Provider>,
  appContainer
);