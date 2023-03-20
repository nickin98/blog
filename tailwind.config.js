module.exports = {
  content: [
    './app/views/**/*',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    colors: {
      yellow: '#ffc800',
      black: '#000000',
      gray: '#f4f4f4',
      white: '#FFFFFF',
      lightGray: '#bbbbbb',
      lightBlack: '#1a1a1a',
      tag: {
        news: '#38A8FF',
        case: '#9048FF',
        sales: '#FF4EA3',
        leadGeneration: '#84CB10',
        agencies: '#FF7051',
        inMyPlace: '#FFB800',
        hover: {
          news: '#9BD3FF',
          case: '#C7A3FF',
          sales: '#fca3ce',
          leadGeneration: '#b6e170',
          agencies: '#f7a594',
          inMyPlace: '#fadb8b'
        }
      },
      staticText: "#bbbbbb",

    },
    boxShadow: {
      previeArticle: '0 0 20px rgba(0, 0, 0, 0.15)',
      hoverPrevieArticle: '0 0 10px rgba(0, 0, 0, 0.15)',
      lightGray: 'inset 0 0 0 1px #bbbbbb'
    }
  }
}
