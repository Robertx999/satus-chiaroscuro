import { writable } from 'svelte/store';

export let showDumbControls = false;
export let isSearchFocused = writable(true);
export let isFavSiteAddFocused = writable(true);

/**
 * @param {boolean} bool
 * @param {import("svelte/store").Writable<boolean>} writable
 */
export function setFocusState(bool, writable){
    writable.set(bool);
}