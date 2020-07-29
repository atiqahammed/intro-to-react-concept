import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Topics from './component/Topics';
import FunctionAsComponent from './component/Topics/FunctionAsChild';
import Header from './component/common/Header';
import Memo from './component/Topics/Memo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Switch>
          <Route path='/memo' component={Memo}/>
          <Route path='/function-as-component' component={FunctionAsComponent} />
          <Route path='/topics' component={Topics} />
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
