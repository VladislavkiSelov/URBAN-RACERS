import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App/App';
// import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
// import thunk from 'redux-thunk'


// const Reducers = combineReducers({
//   // dataProducts: setDataProductsReducer,
//   // orders: setOrderBasketReducer,
//   // product: setCardSelectedIReducer,
//   // url: setApiUrl
// })
// const store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)))
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);