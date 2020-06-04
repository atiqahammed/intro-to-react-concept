import React, { Component } from 'react';

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

                  <a>amazon</a>
              </div>
              <div className="header-links">
                  <a>Cart</a>
                  <a>Sign in</a>
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
                  
                  
                  <li className="product">
                    <img src="/images/shirt.jpg" alt="test product" className="product-image"/>
                    <div className="product-name">
                      <a>Slim Shirt</a>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">10$</div>
                      <div className="product-reting">4.5 stars (100 reviews)</div>
                    </div>
                  </li>


                  <li className="product">
                    <img src="/images/shirt.jpg" alt="test product" className="product-image"/>
                    <div className="product-name">
                      <a>Slim Shirt</a>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">10$</div>
                      <div className="product-reting">4.5 stars (100 reviews)</div>
                    </div>
                  </li>

                  <li className="product">
                    <img src="/images/shirt.jpg" alt="test product" className="product-image"/>
                    <div className="product-name">
                      <a>Slim Shirt</a>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">10$</div>
                      <div className="product-reting">4.5 stars (100 reviews)</div>
                    </div>
                  </li>

                  <li className="product">
                    <img src="/images/shirt.jpg" alt="test product" className="product-image"/>
                    <div className="product-name">
                      <a>Slim Shirt</a>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">10$</div>
                      <div className="product-reting">4.5 stars (100 reviews)</div>
                    </div>
                  </li>



                  <li className="product">
                    <img src="/images/shirt.jpg" alt="test product" className="product-image"/>
                    <div className="product-name">
                      <a>Slim Shirt</a>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">10$</div>
                      <div className="product-reting">4.5 stars (100 reviews)</div>
                    </div>
                  </li>

                  <li className="product">
                    <img src="/images/shirt.jpg" alt="test product" className="product-image"/>
                    <div className="product-name">
                      <a>Slim Shirt</a>
                      <div className="product-brand">Nike</div>
                      <div className="product-price">10$</div>
                      <div className="product-reting">4.5 stars (100 reviews)</div>
                    </div>
                  </li>






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
