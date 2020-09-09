import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo192.png'

const name = 'react';
const obj = {
  firstName:'xiaoming',
  lastName:'xiaohong'
}
function a(name){
  return name.firstName + '' + name.lastName
}
const b = <div>aaaaa</div>
const show = false
const arr = [1,2,3]
const jsx = (
  <div>
    <div>hello,{name}</div>
    <div>{a(obj)}</div>
    {b}
    {show ? 'aaa':'登录'}
    {arr.map((item)=>(<li key={item}>{item}</li>))}
    <img src={logo} alt="" style={{width:'10px',height:'10px'}}/>
  </div>
)
ReactDOM.render(jsx,document.getElementById('root'));


// 基本使用，表达式用{}包裹
// 函数：
// jsx对象
// 条件语句
// 属性
// 模块化