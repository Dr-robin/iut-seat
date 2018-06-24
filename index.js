const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

app.get('/seats', async (req, res) => {
	let result = [];
	let raws = await Promise.all([
		axios.get('http://14.33.168.82:8800/seatmate/Seatmate.php?classInfo=1'),
		axios.get('http://14.33.168.82:8800/seatmate/Seatmate.php?classInfo=2'),
		axios.get('http://14.33.168.82:8800/seatmate/Seatmate.php?classInfo=3')
	]);
	raws.forEach((data) => {
		let $ = cheerio.load(data.data);
		result.push(Number($('#location_box1 .txt2').text()), Number($('#location_box1 .txt4').text()));
	});
	res.json(result);
});
app.use(express.static(__dirname));

app.listen(6943);