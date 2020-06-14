import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

class App extends Component {

  render() {
    
    const openMenu = () => {
      document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () => {
      document.querySelector(".sidebar").classList.remove("open");
    }

    return (
  
      <React.Fragment>
        <div className="grid-container">
          <header className="header">
              <div className="brand">
                  <button onClick={openMenu}>
                      &#9776;
                  </button>

                  <Link to="/">amazon</Link>
              </div>
              <div className="header-links">
                  <a href="#">Cart</a>
                  <a href="#">Sign in</a>
              </div>
          </header>
          <aside className="sidebar">
              <h3>Shopping Categories</h3>
              <button className="sidebar-close-button" onClick={closeMenu}>x</button>
              <ul>
                  <li>
                      <a href="">Shirts</a>
                  </li>
                  <li>
                      <a href="">Shoes</a>
                  </li>
              </ul>
          </aside>

          <main className="main">
            <div className="content">
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/" component={HomeScreen} exact />
                
            </div>
          </main>


          <footer className="footer">Test &copy; 2020 for test website by Atiq Ahammed</footer>
        
        </div>
      </React.Fragment>
      
    );
  }
}

export default App;
