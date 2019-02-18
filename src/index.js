//jsx语法,必须引用React
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.jsx';
// 提供些PWA application使用的
//用户访问了网页,当网络断了之后,serviceWorker会把网页缓存到浏览器中,用户没有网络也可以访问
// import * as serviceWorker from './serviceWorker';


// ReactDOM是一个模块可以把组件组件挂载到Dom节点下
//jsx 中如果需要使用自己的组件的时候,需要首字母大写   例如: <App></App>
ReactDOM.render( < TodoList / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA