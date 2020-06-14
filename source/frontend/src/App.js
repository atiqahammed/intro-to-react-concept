import React, { Component } from 'react';

class App extends Component {

  render() {
    
    const openMenu = () => {
      document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () => {
      document.querySelector(".sidebar").classList.remove("open");
    }

    const data= [];
    return (
  
      <React.Fragment>
        <div className="grid-container">
          <header className="header">
              <div className="brand">
                  <button onClick={openMenu}>
                      &#9776;
                  </button>

                  <a href="#">amazon</a>
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
                <ul className="products">
                  {
                    data.products.map(product =>
                      <li className="product">
                        <img src={product.image} alt="test product" className="product-image"/>
                        <div className="product-name">
                          <a href="#">{product.name}</a>
                          <div className="product-brand">{product.brand}</div>
                          <div className="product-price">{product.price}$</div>
                          <div className="product-reting">{product.retting} stars ({product.reviews} reviews)</div>
                        </div>
                      </li>

                    )
                  }
                  
                  
                  


                  






              </ul>
            </div>
          </main>


          <footer className="footer">Test &copy; 2020 for test website by Atiq Ahammed</footer>
        
        </div>
      </React.Fragment>
      
    );
  }
}

export default App;
