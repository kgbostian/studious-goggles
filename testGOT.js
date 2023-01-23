import got from 'got';

try {
	const {body} = await got.post('https://id.twitch.tv/oauth2/token');
	console.log(body);
} catch (error) {
	console.error(error);
}