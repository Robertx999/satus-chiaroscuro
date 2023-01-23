<script>
	import data from '../data.json';
	import { isSearchFocused, showDumbControls } from '../lib/focusHandler';

	import TimeIslands from '../components/TimeIslands.svelte';
	import SearchBox from '../components/SearchBox.svelte';
	import FavouriteWebsites from '../components/FavouriteWebsites.svelte';
	import SpotifyInfoIsland from '../components/SpotifyInfoIsland.svelte';
</script>

<div
	class="grid grid-cols-[repeat(auto-fit,minmax(0fr,1fr))] grid-rows-[repeat(auto-fit,minmax(0fr,1fr))] gap-10"
>
	<div class="col-start-1 row-start-1 flex flex-col justify-end gap-2 items-center">
		<TimeIslands />
	</div>
	<div
		class="col-start-2 row-start-1 flex flex-col justify-between gap-2 items-center p-3 bg-neutral/80 border border-slate-600 backdrop-blur rounded-box text-neutral-content"
	>
		<FavouriteWebsites favourites={data.favourites} />
	</div>
	<div
		class="col-start-3 row-start-1 row-end-3 flex flex-col gap-2 items-center p-3 bg-neutral/80 border border-slate-600 backdrop-blur rounded-box text-neutral-content"
	>
		<SpotifyInfoIsland spotify_api={data.spotify_api} />
	</div>
	<div
		class="col-start-1 col-end-3 row-start-2 flex flex-col justify-between gap-2 items-center p-3 bg-neutral/80 border border-slate-600 backdrop-blur rounded-box text-neutral-content"
	>
		<SearchBox />
	</div>
</div>

<style>
</style>
