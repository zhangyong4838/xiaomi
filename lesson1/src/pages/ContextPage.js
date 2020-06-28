import React, { Component } from 'react'
import HomePage from './HomePage'
import { ThemeProvider,  UserProvider } from '../Context';
import UserPage from './UserPage';
import ConsumerPage from './ConsumerPage';



export default class ContextPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            theme:{
                themeColor:'red'
            },
            user:{
                name:'小敏'
            }
        }
    }
    render() {
        const {theme,user} = this.state;
        return (
            <div>
                <h3>ContextPage</h3>
                <ThemeProvider value={theme}>
                    <HomePage/>
                    <UserPage/>
                    <UserProvider value={user}>
                        <ConsumerPage/>
                    </UserProvider>
                </ThemeProvider>
            </div>
        )
    }
}


// 组件间传值：
// 1.用props传值，但是无法实现跨层级传递
// 2.用React.createContext()传递值，class组件用 contextType接收值，function组件用useContext接收值
// 3.consumer传值，创建context.js=>创建Provider，使用consumer