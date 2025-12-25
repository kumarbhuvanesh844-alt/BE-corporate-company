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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				navy: {
					primary: 'hsl(var(--navy-primary))',
					secondary: 'hsl(var(--navy-secondary))'
				},
				emerald: {
					DEFAULT: 'hsl(var(--emerald-accent))',
					light: 'hsl(var(--emerald-light))',
					dark: 'hsl(var(--emerald-dark))'
				},
				purple: {
					DEFAULT: 'hsl(var(--purple-primary))',
					light: 'hsl(var(--purple-light))'
				},
				blue: {
					DEFAULT: 'hsl(var(--blue-primary))',
					light: 'hsl(var(--blue-light))'
				},
				orange: {
					DEFAULT: 'hsl(var(--orange-primary))',
					light: 'hsl(var(--orange-light))'
				},
				pink: {
					DEFAULT: 'hsl(var(--pink-primary))',
					light: 'hsl(var(--pink-light))'
				},
				teal: {
					DEFAULT: 'hsl(var(--teal-primary))',
					light: 'hsl(var(--teal-light))'
				},
				coral: {
					DEFAULT: 'hsl(var(--coral))',
					light: 'hsl(var(--coral-light))'
				},
				magenta: {
					DEFAULT: 'hsl(var(--magenta))',
					light: 'hsl(var(--magenta-light))'
				},
				cyan: {
					DEFAULT: 'hsl(var(--cyan))',
					light: 'hsl(var(--cyan-light))'
				},
				lime: {
					DEFAULT: 'hsl(var(--lime))',
					light: 'hsl(var(--lime-light))'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-rainbow': 'var(--gradient-rainbow)',
				'gradient-sunset': 'var(--gradient-sunset)',
				'gradient-ocean': 'var(--gradient-ocean)',
				'gradient-vibrant': 'var(--gradient-vibrant)',
				'gradient-text-primary': 'var(--gradient-text-primary)',
				'gradient-text-accent': 'var(--gradient-text-accent)',
				'gradient-coral': 'var(--gradient-coral)',
				'gradient-magenta': 'var(--gradient-magenta)',
				'gradient-electric': 'var(--gradient-electric)',
				'gradient-fire': 'var(--gradient-fire)',
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-neon': 'var(--gradient-neon)'
			},
			boxShadow: {
				'professional': 'var(--shadow-professional)',
				'elevated': 'var(--shadow-elevated)',
				'accent': 'var(--shadow-accent)'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
