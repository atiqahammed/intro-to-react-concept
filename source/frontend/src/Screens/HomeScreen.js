import React, { useState, useEffect } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fatchData = async () => {
			const { data } = await axios.get('/api/products');
			setProducts(data);
		};

		fatchData();

	}, []);


	return (
		<ul className="products">
            {
            	products.map(product =>
                      
					<li className="product" key={product._id}>
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