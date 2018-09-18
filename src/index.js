import React, { Component } from 'react';
import ReactDom from 'react-dom';

require('./index.css');


const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo ?.bar ?.baz; // 42

class App extends Component {

  render() {
    return <div>
      Hello world
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app'));