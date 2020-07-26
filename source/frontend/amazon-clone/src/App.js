import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/checkout'>
            <h1>Checkout</h1>
          </Route>
          <Route path='/login'>
            <h1>login</h1>
          </Route>
          <Route path='/'>
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
