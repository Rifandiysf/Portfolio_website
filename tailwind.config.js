import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    extend: {
      fontFamily: {
        plusjakarta: ['Plus Jakarta Sans'] 
      },
      colors: {
        Primary: '#584dff',
        Container: '#f0f4f9',
        Title: '#353252',
        Text: '#55518a',
        Body: '#ffffff'
      },
      screens: {
        phone: '360px',
        tablet: '600px',
        laptop: '1025px',
        dektop: '1280px'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

