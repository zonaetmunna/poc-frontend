/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '320px',
			sm: '450px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
		},

		extend: {
			colors: {
				darkBg: '#010804',
				dark: '#000000',
				white: '#ffffff',
				primary: '#20BF6B',
				grayLight: '#ACB3AE',
				grayDark: '#828C85',
				green: '#59665D',
				grayBackground: '#F8F8F8',
				offWhite: '#EFEFEF',
				paleSilver: '#CDD1CE',
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('tailwindcss-animate')],
};
