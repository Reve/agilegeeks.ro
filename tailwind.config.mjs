/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // The "Deep Space" background
                background: '#0B1120', // Very dark blue/slate
                surface: '#1E293B',    // Lighter slate for cards

                // Brand Colors
                primary: {
                    DEFAULT: '#22C55E', // Electric Green (Success/Code)
                    hover: '#16A34A',
                    glow: 'rgba(34, 197, 94, 0.5)',
                },
                secondary: {
                    DEFAULT: '#6366F1', // Indigo/Blurple (AI/Innovation)
                    hover: '#4F46E5',
                },

                // Text Hierarchies
                muted: '#94A3B8',
            },
            fontFamily: {
                // 'Space Grotesk' for high-tech headings
                sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
                // 'Inter' for readable body text
                body: ['Inter', ...defaultTheme.fontFamily.sans],
                // 'JetBrains Mono' for code snippets and technical accents
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
                'hero-glow': "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
            },
        },
    },
    plugins: [],
};