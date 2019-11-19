import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { myVideosSaga } from "./sagas/";
import { videoConfigurationReducer, myVideosReducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    videoConfiguration: videoConfigurationReducer,
    myVideos: myVideosReducer
  }),
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

const rootSagas = [myVideosSaga];
rootSagas.forEach(sagaMiddleware.run);

export default store;
