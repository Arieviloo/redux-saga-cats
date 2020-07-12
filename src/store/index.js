import createSagaMiddleware from "redux-saga";
import { createStore, compose, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import { rootSaga } from "./saga";

const reduxtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxtools)
);

sagaMiddleware.run(rootSaga);
