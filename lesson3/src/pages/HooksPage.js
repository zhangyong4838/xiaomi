import React,{useReducer, useEffect, useLayoutEffect} from 'react';
import { counterReducer } from '../store';



const init = initArg =>{
    return initArg - 0
}
export default function HooksPage() {
    const [state, dispatch] = useReducer(counterReducer, '0',init)
    // 立即执行加[state]
    useEffect(()=>{
        console.log('useEffect');
    },[state])
    useEffect(()=>{
        console.log('useEffect');
        return ()=>{
            console.log('unmount');
        }
    },[])
    // 只执行一次，[]是依赖项
    useLayoutEffect(()=>{
        console.log('useLayoutEffect');
    },[])

    return (
        <div>
            <h3>HooksPage</h3>
            <p>{state}</p>
            <button onClick={()=>dispatch({type:'ADD'})}>add</button>
        </div>
    );
}
