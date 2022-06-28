import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));


const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//Reducer

  const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 2;
      case 'DECREMENT':
        return state - 2;
      default:
        return state;
    }
  }

  const store  = createStore(counter);

  store.subscribe(() => {
    console.log(store.getState());
  })

  store.dispatch(increment());

root.render(

  <React.StrictMode>

    <App />

  </React.StrictMode>
);


