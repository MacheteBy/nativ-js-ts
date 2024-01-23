import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './06/06-collbacks';

const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat']
const users = [{id: 1, name: 'Dimych'},{id: 2, name: 'Sveta'},{id: 3, name: 'Katya'},{id: 4, name: 'Viktor'},{id: 5, name: 'Ignat'}]
const liElements = names.map((el, index) => <li key={index}>{el}</li>)
const liElementsObj = users.map(e => <li key={e.id}>{e.name}</li>)
function App() {
  return (
    <div className="App">
      {/* <ul>
        {liElements}
      </ul>
      <ul>
        {liElementsObj}
      </ul> */}
      <User/>
    </div>
  );
}

export default App;
