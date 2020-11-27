import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "modules";
import rootSaga from "sagas";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
    context: {
        history: customHistory,
    },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

export default store;
