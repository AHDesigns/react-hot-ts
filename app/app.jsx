import React from 'react';
import { hot } from 'react-hot-loader';

const list = ['hi', 'there'];
console.log(...list);
console.log(...list);
const App = () => <div>{list}</div>;

export default hot(module)(App);
