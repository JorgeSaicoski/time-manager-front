import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Base colors
          primary: '#008B8B',     
          secondary: '#1F2E40',
          'secondary-accent': '#354F6F', 
          accent: '#FFC107',     
          hover: '#20B2AA',  
          error: '#C0392B',   
          
          // Text colors
          'text-primary': '#FFFFFF',   
          'text-secondary': '#B0BEC5', 
          'text-accent': '#FFA000', 
          'text-error': '#E74C3C', 
          'text-dark': '#000000',
          
          // Button colors
          'btn-primary-bg': '#007A74',
          'btn-primary-text': '#F0F8FF',
          'btn-accent-bg': '#FFC93C',
          'btn-accent-text': '#1A2430',
          'btn-hover-bg': '#00CED1',     
          'btn-error-bg': '#C0392B',     
          'btn-error-text': '#F5F5F5',
        },
      },
    },
    plugins: [daisyui],
    daisyui: {
      themes: [{
        mytheme: {
          "primary": '#008B8B',
          "secondary": '#1F2E40',
          "accent": '#FFC107',
          "neutral": '#354F6F',
          "base-100": '#008B8B',
          "info": '#20B2AA',
          "success": '#007A74',
          "warning": '#FFC93C',
          "error": '#C0392B',
  
          // Custom properties for DaisyUI components
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.3rem",
          "--rounded-badge": "0.5rem",
          "--animation-btn": "0.3s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      }],
    },
  }