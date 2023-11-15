// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import reducer from './reducers/index';
// import rootSaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const configureStore = (preloadedState) =>
//   createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleware)));

// const store = configureStore({});

// sagaMiddleware.run(rootSaga);

// export default store;

// Тут мы создаём глобальное хранилище данных всего приложения

// Импортируем из редакс два метода

//----------------------------------

// import { createStore, compose } from 'redux';
// import reducer from './reducers/index';

// const composeEnxancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const configureStore = (preloadedState) => createStore(reducer, preloadedState, composeEnxancers());
// const store = configureStore({});

// export default store;

//---------------------------------------------

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnxancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preoladeState) =>
  createStore(reducer, preoladeState, composeEnxancers(applyMiddleware(sagaMiddleware)));

const store = configureStore({});

export default store;
