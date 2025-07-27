
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'pirate': ['"Cinzel"', 'serif'],
				'scroll': ['"Crimson Text"', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				pirate: {
					'ocean-deep': '#0c4160',
					'ocean-light': '#1a6ca5',
					'parchment': '#e0c9a6',
					'parchment-dark': '#d2b48c',
					'gold': '#d4af37',
					'gold-light': '#ffdf00',
					'wood': '#8b4513',
					'wood-light': '#a9734a',
					'wood-dark': '#654321',
					'mist': '#708090',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'sway': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				'wave': {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'25%': { transform: 'translateX(-5px) translateY(5px)' },
					'50%': { transform: 'translateX(0) translateY(0)' },
					'75%': { transform: 'translateX(5px) translateY(5px)' },
					'100%': { transform: 'translateX(0) translateY(0)' },
				},
				'fog-roll': {
					'0%': { opacity: '0', transform: 'translateX(-100%)' },
					'50%': { opacity: '0.5' },
					'100%': { opacity: '0', transform: 'translateX(100%)' },
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'sway': 'sway 6s ease-in-out infinite',
				'wave': 'wave 10s ease-in-out infinite',
				'fog-roll': 'fog-roll 20s linear infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
			},
			backgroundImage: {
				'parchment': "url('/assets/parchment.webp')",
				'ocean': "url('/assets/Ocean.webp')",
				'wood': "url('/assets/wood.webp')",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
