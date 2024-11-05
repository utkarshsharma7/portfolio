/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1a1a1a",
        "dark-text": "#ffffff",
        "light-bg": "#babab8",
        "light-text": "#000000",
      },
      screens: {
        // Laptop Breakpoints
        laptop: "1024px", // Standard laptop screens, starting from 1024px width
        "laptop-md": "1280px", // Slightly larger laptops
        "laptop-lg": "1366px", // Common laptop size
        "laptop-xl": "1440px", // High-res laptop screens
        "laptop-2xl": "1520px",

        // Desktop Breakpoints
        desktop: "1600px", // Large desktop monitors
        "desktop-lg": "1920px", // Full HD monitors, common for many desktops
        "desktop-xl": "2560px", // 2K monitors, popular among professionals
        "desktop-4k": "3840px", // 4K monitors for high-end setups
      },
    },
  },
  plugins: [],
};
