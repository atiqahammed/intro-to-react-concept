import express from 'exppress';
import data from './data';


const app = express();


const port = 8052;

app.get('/api/products', (req, res) => {

	res.send(data.products);
});

app.listen(port, () => {
	console.log('server started on http://localhost:' + port);
});