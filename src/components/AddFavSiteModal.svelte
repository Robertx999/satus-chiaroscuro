<script>
	const domainRegex =
		/^(?:https?:\/\/)?(?:www[.])?((?:[a-zA-Z0-9-]{1,63}[.])?[a-zA-Z0-9-]{1,63}[.][a-zA-Z]{2,6}\/?.*)$/gs;

	/** @type {string} */
	let domainInputValue;
	/** @type {boolean} */
	let isValid;
	$: domainInputValue,
		(isValid = domainRegex.test(domainInputValue)),
		domainRegex.test(domainInputValue);
</script>

<!-- on:change={(e) => {
    onModalOpen(e);
}} -->
<input type="checkbox" id="add-fav-site" class="modal-toggle" />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<label for="add-fav-site" class="modal cursor-pointer">
	<label for="" class="modal-box w-fit">
		<h3 class="font-bold text-lg">Add Favourtie Website</h3>
		<div class="h-5" />
		<!-- {#if modalOpenned} -->
		<input
			class="input input-bordered w-96 max-w-xs {isValid ? 'border-green-600 border-2' : ''}"
			bind:value={domainInputValue}
			type="text"
			placeholder="e.g. domain.com/sub..."
		/>
		<!-- {/if} -->
		<div class="modal-action">
			<label for="add-fav-site" class="btn {isValid ? '' : 'btn-disabled'}">
				Add
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					fill="currentColor"
					class="bi bi-plus"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
					/>
				</svg>
			</label>
		</div>
	</label>
</label>
