import React, { Component } from 'react'


// hoc
// 是个函数，参数为组件，返回值也是个组件

const foo = (Cmp)=>props=>{
    return (
        <div className="border">
            <Cmp {...props}/>
        </div>
    )
}

// function Child(props){
//     return(
//         <div className="border">Child--{props.name}</div>
//     )
// }

// const Foo = foo(foo(Child))
@foo
@foo
class Child extends Component {
    render() { 
        return ( <div className="border">Child--{this.props.name}</div> );
    }
}



export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>HocPage</h3>
                {/*<Foo name="123"/>*/}
                <Child/>
            </div>
        )
    }
}
// 装饰器：作用在class组件上,从下往上执行
// 安装：yarn add @babel/plugin-proposal-decorators
// 更新config-overrides.js
//配置完成后记得重启下
// const { addDecoratorsLegacy } = require("customize-cra");
// module.exports = override(
//     ...,
//     addDecoratorsLegacy()//配置装饰器
// );
// 如果vscode对装饰器有warning，vscode设置里加上
// javascript.implicitProjectConfig.experimentalDecorators": true
