function productReducer(state = { products: [] }, action) {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return {loading: true};
			
		case PRODUCT_LIST_RESPONSE_SUCCESS:
			return {loading: false, products: action.products};
		case PRODUCT_LIST_RESPONSE_FAIL:
			return {loading: false, error: action.error};
		default:
			return state;
	}
}

export default productReducer;