<script>
	/** @type {String[]} */
	export let favourites;
	/** @type {String} */
	let tipData;
</script>

<div class="tooltip tooltip-primary" data-tip={tipData}>
	<div class="btn-group">
		{#each favourites as site}
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<button
				class="btn border border-slate-600 -mx-px"
				on:mouseover={() => {
					tipData = site.replace(/https?:\/\//, '');
				}}
				on:click={() => {
					window.location.href = 'http://'.concat(site.replace(/https?:\/\//, ''));
				}}
			>
				<img
					class="rounded-full"
					src="https://s2.googleusercontent.com/s2/favicons?domain={site}&sz=18"
					alt=""
				/>
			</button>
		{/each}
		<!-- <label for="add-fav-site" class="btn border border-slate-600 -mx-px">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			fill="white"
			class="bi bi-plus"
			viewBox="0 0 16 16"
		>
			<path
				d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
			/>
		</svg>
	</label> -->
	</div>
</div>
