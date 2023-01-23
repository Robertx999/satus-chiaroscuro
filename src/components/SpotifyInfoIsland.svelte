<script>
	// import SpotifyWebApi from 'spotify-web-api-node';
	import superagent from 'superagent';

	export let spotify_api;
	// let spotifyApi = new SpotifyWebApi(spotify_api);
	let nowPlaying = '...';
	let code;

	// spotifyApi.setAccessToken(spotify_api.access_token);

	// @ts-ignore
	// spotifyApi.getMyCurrentPlayingTrack().then(
	// 	function (data) {
	// 		nowPlaying = data.body.item.name;
	// 		console.log('Now playing: ' + data.body.item.name);
	// 	},
	// 	function (err) {
	// 		console.log('Something went wrong!', err);
	// 	}
	// );

	superagent
		.post('https://accounts.spotify.com/api/token')
		.query({
			redirect_uri: spotify_api.redirect_uri,
			grant_type: spotify_api.grant_type,
			client_id: spotify_api.client_id,
			client_secret: spotify_api.client_secret,
			code: code
		})
		.end((err, res) => {
			console.log(res);
			console.error(err);
		});
</script>

{nowPlaying}
