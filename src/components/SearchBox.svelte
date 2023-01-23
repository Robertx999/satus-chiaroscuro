<script>
	import { onMount } from 'svelte';
	import { showDumbControls, isSearchFocused, setFocusState } from '../lib/focusHandler';

	/** @type {String} */
	let input_value;
	/** @type {HTMLInputElement} */
	let searchInput;

	onMount(() => {
		searchInput.focus();
	});

	// document.addEventListener('keyup', (e) => {
	// 	switch (e.key) {
	// 		case 'f':
	// 			searchInput.focus();
	// 			break;
	// 		case 'Escape':
	// 			searchInput.blur();
	// 			break;
	// 	}
	// });
</script>

<div class="w-full">
	<div class="form-control w-full">
		<div class="{showDumbControls ? 'input-group' : ''} w-full">
			<div class="flex items-center relative w-full">
				<input
					bind:this={searchInput}
					class="input input-bordered min-w-[18rem] w-full"
					on:focusin={(e) => {
						setFocusState(true, isSearchFocused);
					}}
					on:focusout={(e) => {
						setFocusState(false, isSearchFocused);
					}}
					on:keypress={(e) => {
						if (e.key == 'Enter' && input_value != '') {
							window.location.href = 'https://www.google.com/search?q=' + input_value;
						}
					}}
					bind:value={input_value}
					type="text"
				/>
				{#if !$isSearchFocused && input_value == ''}
					<div class="absolute left-3 pointer-events-none">
						<span>
							<kbd class="kbd kbd-sm">F</kbd> to Focus
						</span>
					</div>
				{/if}
			</div>
			{#if showDumbControls}
				<button
					class="btn btn-square"
					on:click={() => {
						if (input_value != '') {
							window.location.href = 'https://www.google.com/search?q=' + input_value;
						}
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
			{/if}
		</div>
	</div>
</div>
