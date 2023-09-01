import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';


//function logger(abj,next,action)
//logger(obj)(next)(action)
// const logger = function ({dispatch, getState}){
//   return function(next) {
//     return function(action) {
//       console.log('ACTION_TYPE = ',action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch, getState}) => (next) =>(action) =>{
  if(typeof action!=='function') {
    console.log('ACTION_TYPE = ',action.type);
  }
  
  next(action);
}

// const thunk = ({dispatch, getState}) => (next) =>(action) =>{
//   // console.log('ACTION_TYPE = ',action.type);
//   if(typeof action === 'function') {
//     action(dispatch);
//     return ;
//   }
//   next(action);
// }

const store=legacy_createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store',store);
// console.log('Before state',store.getState());

// export const StoreContext = createContext();
// console.log('StoreContext',StoreContext);
// store.dispatch(
//   {
//     type:"ADD_MOVIES",
//     movies: [{key:'m1'},{name:'m2'},{name:'m3'}]
//   }
// )

// console.log("after state",store.getState());
// class Provider extends React.Component {
//   render () {
//     const {store} =this.props;
//     return (
//       <StoreContext.Provider value={store}>
//          {this.props.children}
//     </StoreContext.Provider>
//     );
//   }
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
    
    
  
);
