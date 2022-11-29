/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            colors: {
                brand: {
                    white: 'var(--color06)',
                    light: 'var(--color01)',
                    primary: 'var(--color02)',
                    default: 'var(--color05)',
                    dark: 'var(--color03)',
                    secondary: 'var(--color04)',
                    exrta01: 'var(--color08)',
                    exrta02: 'var(--color09)',
                    exrta03: 'var(--color10)',
                    exrta04: 'var(--color11)',
                    exrta05: 'var(--color12)'
                }
            },
            fontFamily: {
                'sans': 'var(--font01)',
                'serif': 'var(--font02)',
                'fatface': 'var(--font03)',
                'serif-secondary': 'var(--font04)',
            }
        }
    },
	plugins: [],
}
