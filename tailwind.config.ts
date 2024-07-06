import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#FF8F00",
          "primary-content": "#FFFFFF",
          "secondary": "#7A00C2",
          "secondary-content": "#f2f2f2",
          "accent": "#42AA00",
          "accent-content": "#000000",
          "neutral": "#FFFFFF",
          "neutral-content": "#e2e4e9",
          "base-100": "#1D232A",
          "base-200": "#e0ebeb",
          "base-300": "#e6e6e6",
          "base-content": "#CDCDCD",
          "info": "#2a323c",
          "info-content": "#D2E2FF",
          "success": "#333333",
          "success-content": "#1e1f20",
          "warning": "#237bf6",
          "warning-content": "#3333ff",
          "error": "#c2d1f0",
          "error-content": "#f2f2f2",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#1E88E5",
          "primary-content": "#0d0d0d",
          "secondary": "#4CAF50",
          "secondary-content": "#1a1a1a",
          "accent": "#FF4081",
          "accent-content": "#FFFFFF",
          "neutral": "#404040",
          "neutral-content": "#373d49",
          "base-100": "#2a323c",
          "base-200": "#141f1f",
          "base-300": "#262626",
          "base-content": "#595959",
          "info": "#1f262d",
          "info-content": "#E3F2FD",
          "success": "#0d0d0d",
          "success-content": "#0d0d0d",
          "warning": "#47d147",
          "warning-content": "#FFFFFF",
          "error": "#050a14",
          "error-content": "#FFFFFF",
        }
      },
    ],
  },
  plugins: [require("daisyui")],
}

export default config
