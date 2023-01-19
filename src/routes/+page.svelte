<script>
	import { isSearchFocused } from '../lib/focusHandler';

	import TimeIslands from '../components/TimeIslands.svelte';
	import SearchBox from '../components/SearchBox.svelte';
	import FavouriteWebsites from '../components/FavouriteWebsites.svelte';
	import AddFavSiteModal from '../components/AddFavSiteModal.svelte';

	// /** @type {boolean} */
	// let modalOpenned;
	// /** @param {Event & { currentTarget: EventTarget & HTMLInputElement; }} e */
	// function onModalOpen(e) {
	// 	if (e.currentTarget.checked) {
	// 		console.log('modal openned');
	// 		modalOpenned = true;
	// 		// domainInput.focus();
	// 	} else {
	// 		modalOpenned = false;
	// 	}
	// }
</script>

<div class="flex gap-10">
	<TimeIslands />
	<div
		class="flex flex-col gap-2 items-center p-3 bg-neutral/80 border border-slate-600 backdrop-blur rounded-box text-neutral-content"
	>
		<SearchBox />
		{#if $isSearchFocused}
			<span><kbd class="kbd kbd-sm h-fit w-fit">Enter</kbd> to search</span>
		{/if}
		<FavouriteWebsites />
	</div>
</div>

<AddFavSiteModal />

<style>
</style>
