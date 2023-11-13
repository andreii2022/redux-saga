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
import { createStor, compose } from 'react-redux';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({})
    : compose;

const configureStore = (preladeState) => {
  createStor(reducer, preladeState, composeEnxancers());

  const store = configureStore({});
};

export default store;
