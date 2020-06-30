import React, { Component } from 'react'
import store from '../store/'

export default class ReduxPage extends Component {
    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.forceUpdate()
        })
    }
    componentWillUnmount(){
        if(this.unsubscribe){
            this.unsubscribe()
        }
    }
    add = ()=>{
        store.dispatch({type:"ADD"})
    }
    render() {
        return (
            <div>
               <h3>ReduxPage</h3> 
               <p>{store.getState()}</p>
               <button onClick={this.add}>add</button>
            </div>
        )
    }
}
