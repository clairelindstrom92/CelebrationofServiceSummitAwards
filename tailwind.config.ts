import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#4682B4',
        'navy': '#0f172a',
        'navy-old': '#001F3F',
        'navy-deep': '#1e3a8a',
        'silver': '#C0C0C0',
        'metallic-gray': '#A9A9A9',
        'platinum': {
          light: '#e9e9ec',
          DEFAULT: '#cfd1d3',
          dark: '#a7a9ac',
        },
        'gold': {
          light: '#f2e2a2',
          DEFAULT: '#C5A64A',
          dark: '#8A6E2F',
        },
        'gold-old': '#C9A961',
        'gold-light-old': '#E5C97A',
        'gold-dark-old': '#A68B4A',
        'gold-accent': '#D4AF37',
        'ivory': '#f9f9f6',
        'charcoal': '#1E1E1E',
        'soft-gray': '#E7E4DE',
        'bronze': '#8A6E2F',
        'sky-blue': '#4E6A8D',
        'bordeaux': '#3E1C1C',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Playfair Display', 'Libre Baskerville', 'serif'],
        serif: ['var(--font-heading)', 'Playfair Display', 'Libre Baskerville', 'serif'],
        tagline: ['var(--font-tagline)', 'Cinzel', 'Trajan Pro', 'serif'],
        body: ['var(--font-body)', 'Inter', 'Lato', 'system-ui', 'sans-serif'],
        sans: ['var(--font-nav)', 'Inter', 'Lato', 'system-ui', 'sans-serif'],
        nav: ['var(--font-nav)', 'Montserrat', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'metallic-gradient': 'linear-gradient(180deg, rgba(192,192,192,0.1) 0%, rgba(169,169,169,0.1) 50%, rgba(192,192,192,0.1) 100%)',
        'hero-pattern': 'linear-gradient(135deg, #001F3F 0%, #4682B4 100%)',
      },
    },
  },
  plugins: [],
}
export default config


