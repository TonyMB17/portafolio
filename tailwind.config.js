/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        halo: {
          armor: '#3B422B',
          plasma: '#4DEEFE',
          visor: '#F9A602',
          carbon: '#0D0D0D',
          panel: 'rgba(20, 20, 20, 0.8)',
        },
      },
      backgroundImage: {
        scanlines: "url('/images/scanlines.png')",
      },
      keyframes: {
        boot: {
          '0%': { transform: 'scaleX(0)', opacity: '0.45' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-130%)' },
          '100%': { transform: 'translateY(130%)' },
        },
        blink: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.08', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.5)' },
        },
        aurora1: {
          '0%':   { transform: 'translate(0%,   0%)   scale(1)',    opacity: '0.55' },
          '33%':  { transform: 'translate(8%,  -14%)  scale(1.18)', opacity: '0.75' },
          '66%':  { transform: 'translate(-7%,  9%)   scale(0.88)', opacity: '0.42' },
          '100%': { transform: 'translate(0%,   0%)   scale(1)',    opacity: '0.55' },
        },
        aurora2: {
          '0%':   { transform: 'translate(0%,  0%)   scale(1)',    opacity: '0.45' },
          '33%':  { transform: 'translate(-11%, 7%)  scale(1.12)', opacity: '0.62' },
          '66%':  { transform: 'translate(9%,  -11%) scale(0.85)', opacity: '0.35' },
          '100%': { transform: 'translate(0%,  0%)   scale(1)',    opacity: '0.45' },
        },
        aurora3: {
          '0%':   { transform: 'translate(0%,  0%)   scale(1)',    opacity: '0.30' },
          '50%':  { transform: 'translate(-6%,-8%)   scale(1.25)', opacity: '0.50' },
          '100%': { transform: 'translate(0%,  0%)   scale(1)',    opacity: '0.30' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmerLine: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        boot:        'boot 1.2s ease-in-out forwards',
        scan:        'scan 3.5s linear infinite',
        blink:       'blink 1.4s ease-in-out infinite',
        twinkle:     'twinkle 3s ease-in-out infinite',
        aurora1:     'aurora1 20s ease-in-out infinite',
        aurora2:     'aurora2 25s ease-in-out infinite',
        aurora3:     'aurora3 18s ease-in-out infinite alternate',
        floatY:      'floatY 6s ease-in-out infinite',
        shimmerLine: 'shimmerLine 3s linear infinite',
      },
    },
  },
  plugins: [],
}

