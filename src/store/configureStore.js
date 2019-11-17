import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import videoConfigurationSaga from "./sagas/videoConfigurationSaga";
import { videoConfigurationReducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    videoConfiguration: videoConfigurationReducer
  }),
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

const rootSagas = [videoConfigurationSaga];

rootSagas.forEach(sagaMiddleware.run);

export default store;
