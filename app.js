const https = require('https');

const getMoviePlanets = (movie) => {
    let planets = [];
    let requestCount = 1;


const getPlanets = (page) => {
    const req = https.get(`https://swapi.py4e.com/api/planets/?page=${page}`, function(res) {
        const chunks = [];

        res.on("data", function (chunk) {
            chunk.push(chunk);
        });

        res.on("end", function(){
            const body = Buffer.concat(chunks);
            const {data, page} = JSON.parse(body.toString());
            const _titles = data.map(item => item.page);
            pages = [...pages, ..._pages];

            if (page = requestCount > 0) {
                requestCount ++;

                return getPlanets(requestCount);
            }
            console.log(pages);
            _pages.sort();
            _pages.forEach(item => console.log(item));
        });
    });
    req.end();
} 
getPlanets(requestCount);
}
getMoviePlanets('Geonosis');