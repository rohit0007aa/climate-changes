/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'var(--color-paper)',
          subtle: 'var(--color-paper-subtle)',
          elevated: 'var(--color-paper-elevated)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          muted: 'var(--color-ink-muted)',
          faint: 'var(--color-ink-faint)',
        },
        ember: {
          DEFAULT: 'var(--color-ember)',
          hover: 'var(--color-ember-hover)',
          tint: 'var(--color-ember-tint)',
        },
        'teal-sea': {
          DEFAULT: 'var(--color-teal)',
          tint: 'var(--color-teal-tint)',
        },
        rule: 'var(--color-rule)',
      },
      fontFamily: {
        serif: ['Newsreader', 'Fraunces', 'Georgia', 'serif'],
        display: ['Fraunces', 'Newsreader', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'Archivo', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      maxWidth: {
        reading: '64ch',
        'reading-narrow': '48ch',
      },
    },
  },
  plugins: [],
}
