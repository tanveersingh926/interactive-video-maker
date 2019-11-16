import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import subscribedPlanSaga from "./sagas/subscribedPlanSaga";
import { subscribedPlanReducer } from "./reducers/";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    subscribedPlan: subscribedPlanReducer
  }),
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

const rootSagas = [subscribedPlanSaga];

rootSagas.forEach(sagaMiddleware.run);

export default store;
