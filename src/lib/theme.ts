import { browser } from "$app/environment";
import { get_store_value } from "svelte/internal";

import { writable } from "svelte/store";

export const darkMode = writable(false);
export const prefered = writable("system");
export let system: MediaQueryList;
export const systemMatches = writable(false);

function dispatchUpdate() {
	if (!system) return;

	const _prefered = get_store_value(prefered),
		_darkMode = get_store_value(darkMode);
	if (_prefered === "system") {
		const _systemMatches = get_store_value(systemMatches);
		localStorage.removeItem("theme");
		if (_systemMatches !== _darkMode) darkMode.set(_systemMatches);
	} else {
		const _preferedDark = _prefered === "dark";
		localStorage.setItem("theme", _prefered);
		if (_preferedDark !== _darkMode) darkMode.set(_preferedDark);
	}
}

if (browser) {
	system = window.matchMedia("(prefers-color-scheme: dark)");
	system.onchange = (e) => systemMatches.set(e.matches);
	systemMatches.set(system.matches);

	prefered.set(localStorage.getItem("theme") || "system");

	systemMatches.subscribe(dispatchUpdate);
	prefered.subscribe(dispatchUpdate);
	darkMode.subscribe((d) => {
		const _prefered = get_store_value(prefered),
			_systemMatches = get_store_value(systemMatches);

		if (
			d !== undefined &&
			((_prefered === "system" && system !== undefined && _systemMatches !== d) ||
				(_prefered !== "system" && d !== (_prefered === "dark")))
		) {
			prefered.set(d ? "dark" : "light");
		}

		d ? document.head.classList.add("dark") : document.head.classList.remove("dark");
	});
}
