import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/common/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Switch>
          <Route path='/checkout'>
            <h1>Checkout</h1>
          </Route>
          <Route path='/login'>
            <h1>login</h1>
          </Route>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
