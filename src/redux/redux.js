export default function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState;
  let currentListeners = [];
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.forEach(listener => listener());
    return action;
  }
  function subscribe(listener) {
    currentListeners.push(listener);
    return () => {
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}
// -------------------------------------------------------------------------
export function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };
    const middlewareChain = middlewares.map(middleware => middleware(midApi));
    dispatch = compose(...middlewareChain)(store.dispatch);
    return {
      ...store,
      // 加强版的dispatch
      dispatch,
    };
  };
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// -------------------------------------------------------------------------
const reducer = (state, action) => {
  switch (action.type) {
    case 'OOO': {
      return {
        ...state,
        count: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
const store = createStore(reducer);

console.log('store.getState()', store.getState());
store.dispatch({
  type: 'OOO',
  payload: 1,
});
console.log('store.getState()', store.getState());
