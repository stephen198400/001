/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/build/img/Real Estate/1.png')",
				hero_2: "url('/build/img/Real Estate/Lightbox_1.png')",
			},
		},
		plugins: [],
	},
};
