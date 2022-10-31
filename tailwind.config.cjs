/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class", ["head.dark ~ body"]],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				dela: ["Dela Gothic One", "cursive"]
			}
		}
	},
	plugins: []
};
