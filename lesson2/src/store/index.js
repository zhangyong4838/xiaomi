// import {createStore} from 'redux';
import {createStore} from '../kredux/';


function counterRedux(state = 0,action){
    switch (action.type){
        case 'ADD':
            return state + 1;
        case "MINUS":
            return state - 1;
        default:
            return state;
    }
}


const store = createStore(counterRedux)

export default store