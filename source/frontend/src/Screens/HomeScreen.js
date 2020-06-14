import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function HomeScreen(props) {
	return (
		<ul className="products">
            {
            	data.products.map(product =>
                      
					<li className="product">
						<Link to={ '/product/' + product._id }>
							<img src={product.image} alt="test product" className="product-image" />
						</Link>
                        <div className="product-name">
							<Link to={ '/product/' + product._id }>{product.name}</Link>
                          	<div className="product-brand">{product.brand}</div>
                          	<div className="product-price">{product.price}$</div>
                          	<div className="product-reting">{product.retting} stars ({product.reviews} reviews)</div>
                        </div>
                    </li>

                )
            }
                  
                
        </ul>
	);
}

export default HomeScreen;