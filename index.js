const  punycode  =  require ( 'punycode/' ) ;
const axios = require("axios");
const cheerio = require("cheerio");
const https = require('https');
//express server

//let notariatru = punycode.toASCII('агеева');
//await parser(lname)
//const prs =

	const fetchTitles = async (notariatru) => {
		try {
			const agent = new https.Agent({
				rejectUnauthorized: false
			});
		const response = await axios.get(notariatru, { httpsAgent: agent });
	   
			const html = response.data;
	   
		const $ = cheerio.load(html);
	   
		const titles = [];
		$('a.map-logo').each((_idx, el) => {
		  const title = $(el).text()
		  titles.push(title)
		});

		$('div.telephoneBox  > ul > li.nav-item ').each((_idx, el) => {
			const title = $(el).text()
			titles.push(title)
		});
		return  titles;
		} catch (error) {
			throw error;
		}
	};
	//end examle


module.exports = {
	ajaj:async function (lname = 'желобицкая') {

		// function parser() { // агеева
			let notariatru = 'https://' + punycode.toASCII(`нотариус-${lname}.рф`);
				
			let a =[]
			a = await fetchTitles(notariatru)
			return a
	//	}

/*
		parser(nn).then((response) => {
			response.forEach((element) => console.log(`--${element.toString().trim()}--`));
		  });*/
		//aaa(' ',' ',' ', ' ');
	}
  }

/*
  module.exports = {
	ajaj: function (nn) {
		parser(nn).then((response) => {
			response.forEach((element) => console.log(`--${element.toString().trim()}--`));
		  });
		//aaa(' ',' ',' ', ' ');
	}
  }
*/




/*
parser().then((response) => {
	response.forEach((element) => console.log(`--${element.toString().trim()}--`));
	//console.log(`get data: ${response}`);
  });
*/
//get data
//https://ru.stackoverflow.com/questions/821297/%D0%9F%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B0-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-node-js
//npm start
/*
	   (async () => {
		await parser()
		return a
	  	})()
*/
	   
	


//https://xn----7sb${notariatru}.xn--p1ai/

//const agent = new https.Agent({ ca: MY_CA_BUNDLE });

/*
notariat.ru
console.log(`https://xn----7sb${i}.xn--p1ai/`)

//https://xn----7sbbajfoaw2clzoks.xn--p1ai/

*/
/*
//npm cache clean --forcenpm cache verify
npm uninstall yourPackage
npm uninstall -g yourPackage
//npm run start
*/