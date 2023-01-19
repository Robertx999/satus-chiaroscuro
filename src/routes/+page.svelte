<script>
    import { isFocused } from "../lib/searchboxFocus";

    import TimeIslands from "../components/TimeIslands.svelte";
    import SearchBox from "../components/SearchBox.svelte";
	import FavouriteWebsites from "../components/FavouriteWebsites.svelte";

    const domainRegex = /^(?:https?:\/\/)?(?:www[.])?((?:[a-zA-Z0-9-]{1,63}[.])?[a-zA-Z0-9-]{1,63}[.][a-zA-Z]{2,6}\/?.*)$/gs;

    /** @type {string} */
    let domain_input_value;
    /** @type {boolean} */
    let isValid;
    $: domain_input_value, isValid = domainRegex.test(domain_input_value), console.log(domainRegex.test(domain_input_value));
</script>

<div class="flex gap-10">
    <TimeIslands/>
    <div class="flex flex-col gap-2 items-center p-3 bg-neutral/80 border border-slate-600 backdrop-blur rounded-box text-neutral-content">
        <SearchBox/>
        {#if $isFocused}
            <span><kbd class="kbd kbd-sm h-fit w-fit">Enter</kbd> to search</span>
        {/if}
        <FavouriteWebsites/>
    </div>
</div>

<!-- favourite website add modal -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-fit">
    <h3 class="font-bold text-lg">Add Favourtie Website</h3>
    <div class="h-5"></div>
    <input class="input input-bordered w-96 max-w-xs {isValid ? 'border-green-600 border-2' : ''}" bind:value={domain_input_value} type="text" placeholder="e.g. domain.com/sub..." />
    <div class="modal-action">
      <label for="my-modal" class="btn {isValid ? '' : 'btn-disabled'}">
        Add
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </label>
    </div>
  </div>
</div>

<style>
</style>
