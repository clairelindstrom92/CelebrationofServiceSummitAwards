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
        'navy': '#001F3F',
        'silver': '#C0C0C0',
        'metallic-gray': '#A9A9A9',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        nav: ['var(--font-nav)', 'system-ui', 'sans-serif'],
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


