import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	
	darkMode: 'class',

	theme: {
		extend: {
		  colors: {
			primary: '#bd004b',
			secondary: '#9933ff',
			surface: 'var(--surface-color)',
		  },
		  fontFamily: {
			sans: ['Inter', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			mono: ['Menlo', 'monospace'],
		  }
		},
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
