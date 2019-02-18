import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem.jsx';
//React中响应式设计思想
class TodoList extends Component {
  constructor(props) {
    //执行父类的构造函数, parent.constructor.call(this)
    super(props);
    this.state = {
      inputValue: '',
      list: ['learn vue', 'learn react']
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="text"> 输入内容</label>
          <input id="text" className="input" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} type="text" />
          <button onClick={this.handelBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              // <li onClick={this.handleItemDelete.bind(this, index)} dangerouslySetInnerHTML={{ __html: item }} key={index}>
              // </li>
              <TodoItem key={index} content={item} />
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handelBtnClick() {
    if (this.state.inputValue) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
        // list: this.state.list.push(this.state.inputValue)  错误返回的是数组长度
      });
    } else {
      alert('请输入内容');
    }
  }
  handleItemDelete(index) {
    // this.state.list.splice(index, 1)  不推荐这样使用 immutable(不能直接取修改state里边的值,如果需要修改,先复制出一个副本来在修改)
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default TodoList;
