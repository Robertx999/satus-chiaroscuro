import { writable } from 'svelte/store';

export let showDumbControls = false;
export let isFocused = writable(true);
/** @param {boolean} bool */
export function setFocus(bool){
    isFocused.set(bool);
}