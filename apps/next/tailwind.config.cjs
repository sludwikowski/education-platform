// tailwind config is required for editor support
/** @type {import('tailwindcss').Config} */

const sharedConfig = require("tailwind-config/tailwind.config.cjs")

module.exports = {
  ...sharedConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ]
}