const express = require('express');

const router = express.Router();

router.get('/whoami',(req,res)=>{
	const headers = {
		"ipaddress":req.headers['host'],
		"language":req.headers['accept-language'],
		"software":req.headers['user-agent']
	}
	res.json(headers);
});

module.exports = router;
