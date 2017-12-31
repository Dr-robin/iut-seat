const app = require('express')();
const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
	let res = await axios.get('http://14.33.168.82:8800/seatmate/Seatmate.php?classInfo=2');
	const $ = cheerio.load(res.data);
	console.log(Number($('#location_box1 .txt4').text()) + '/' + Number($('#location_box1 .txt2').text()));

})();

app.get('/', async (req, res) => {
	let res = await axios.get('http://14.33.168.82:8800/seatmate/Seatmate.php?classInfo=2');
	const $ = cheerio.load(res.data);
	console.log(Number($('#location_box1 .txt4').text()) + '/' + Number($('#location_box1 .txt2').text()));
});