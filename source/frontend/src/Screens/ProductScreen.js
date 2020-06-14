import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen(props) {
	const product = data.products.find(x => x._id === props.match.params.id);

	return (
		<div>
			<div className="back-to-result">
				<Link to="/">Back to the result</Link>
			</div>

			<div className="details">
				<div className="details-image">
					<img src={product.image} alt={product.name}></img>
				</div>

			
				<div className="details-info">
					<ul>
						<li>
							<h4>{product.name}</h4>
						</li>
						<li>
							<b>{product.ratting} Stars ( {product.numReviews} Reviews)</b>
						</li>
						<li>
							Price: <b>${product.price}</b>
						</li>
						<li>
							Descripition:
							<b>{product.description}</b>
						</li>
					</ul>
				</div>

				<div className="details-action">
					<ul>
						<li>
							Price: {product.price}
						</li>
						<li>
							Status: {product.status}
						</li>
						<li>
							Qty:
							<select>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
							</select>
						</li>
						<li>
							<button className="button primary">Add to Cart</button>
						</li>

					</ul>
				</div>

			</div>
		</div>
	);
}

export default ProductScreen;