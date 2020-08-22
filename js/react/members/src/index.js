// 入口文件
import React from "react";  // es6 import 全面使用es6
import ReactDOM from "react-dom";
import "./styles.css"; // CSS WXSS global.css
// react 语法  小程序
import {MyComponent} from './demo.js';

function App() {
  return (
    // WXML JSX
    <div className="App">
      App
      <MyComponent />
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement)