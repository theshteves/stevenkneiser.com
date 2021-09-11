// Import CreatorsWhoCode essays
const axios = require('axios')
const parseString = require('xml2js').parseString;
const CWC_FEED_URL = 'https://creatorswhocode.com/feed.xml?dev=1'

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const cwc = await axios.get(CWC_FEED_URL)

	parseString(cwc.data, (err, result) => {
		result.feed.entry.forEach(entry => {
			const {link, updated, summary} = entry

			actions.createNode({
				id: link[0]['$'].href,
				url: link[0]['$'].href,
				title: link[0]['$'].title,
				date: updated[0].substring(0, 10),
				excerpt: summary[0]._,
				internal: {
					type: 'CWC',
					contentDigest: createContentDigest(entry),
				},
			})
		})
	})
}
