/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        "accent-strong": "var(--color-accent-strong)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        urgent: "var(--color-urgent)",
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'Menlo', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}
