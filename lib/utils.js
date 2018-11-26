const cheerio = require('cheerio')

function parseItems(body) {
	let items = new Array()
    const $ = cheerio.load(body);

	return new Promise((resolve, reject) => {
        $('.place_rank_list li').each(function(i, element) {
            const kebab = {    
                id: parseInt($(element).children('.rank').text()), 
                title: $(element).children('.left').children('a').text(),
                location: $(element).children('.left').children('p').text().split('\n')[0],
                url: 'https://www.kebab-frites.com' + $(element).children('.left').children('a').attr('href'),
                notation: parseFloat($(element).children('.left').children('p.note').children('span.bg_note').children('span').attr('class').substring(1))/10,
                img: $(element).children('img').attr('src')
            }   
            items.push(kebab)
        });
        resolve(items)
	})
}

module.exports = {
    parseItems
}