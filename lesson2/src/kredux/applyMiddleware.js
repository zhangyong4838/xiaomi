export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    let store = createStore(reducer);
    // 这是原版的dispatch，这个dispatch只能接受plain object，不能处理异步、promise
    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };

    const middlewaresChain = middlewares.map(middleware => middleware(midApi));

    dispatch = compose(...middlewaresChain)(store.dispatch);

    return {
      ...store,
      // 加强版的dispatch
      dispatch
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
// 柯里化函数：利用闭包原理，把接收多个参数的函数变成接收单一参数的函数，并返回余下函数的参数而且返回函数的新结果
// 好处是：可以实现数据的缓存
function carry(y){
  return function(x){
    return x + y
  }
}
carry(2)(1)//3