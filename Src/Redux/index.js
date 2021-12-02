import { createStore, applyMiddleware,compose } from "redux";
import rootReducer from "./Reducers";
// Dev tools
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from "redux-saga";
import rootSaga from "./Saga";
const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {

  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ));

  sagaMiddleware.run(rootSaga);
  return store;
}
