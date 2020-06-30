export default function createStore(reducer){
    let currentState = null;
    let currentListeners = [];
    // 获取store state
    function getState(){
        return currentState;
    }
    // 修改状态
    function dispatch(action){
        currentState = reducer(currentState,action)
        currentListeners.forEach(listeners =>listeners())
    }
    // 收集状态
    function subscribe(listeners){
      currentListeners.push(listeners)  
      return ()=>{
          currentListeners = [];
      }
    }



    return {
        getState,
        dispatch,
        subscribe
    }
}