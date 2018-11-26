const axios = require('axios')
const { parseItems } = require('./utils')

class Kebab {
	constructor() {
		this.request = axios.create({
			baseURL : 'https://www.kebab-frites.com/meilleur-kebab'
		})
	}

	async getPopular() {
		try {
			const response = await this.request({
				method: 'GET',
				url: `/paris-d54.html`
			})
			return await parseItems(response.data)
		} catch (err) {
			console.log(err)
		}
	}
}

module.exports = Kebab