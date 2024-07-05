/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('../../dist/img/main_bg.png')",
        'banner':'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);'
      },
      colors: {
        'primary':'#8D50EF',
        'primary2':'#E8DCFC',
        'secondary':'#232340',
        'third':'#323259',
        'dark':'#110E2D',
        'input':'#F5F5F5',
        'list':'#EAE4FF',
        'select':'#E8E8F4',
      },
      zIndex: {
        1: "1",
        2: "2",
      },
      lineHeight:{
       22:'90px'
      },
      fontFamily: {
        rokh: "rokh",
        stretch: "stretch",
      },
      boxShadow: {
        'header': ' 0px 0px 60px 0px #0000001A',
        'button':'0px 4px 158px 0px #8D50EF',
        'card':'0px 4px 200px 0px #0000001A',
        'portfolioCard': '0px 0px 60px 0px #0000001A',
        'pagination':'0px 0px 78px 0px #0000001C',
        'footer':'0px 4px 200px 0px #0000001A',
        'purple':' 0px 1.9704642295837402px 77.83333587646484px 0px #8D50EF',
        'footerLink':'0px 4px 158px 0px #8D50EF80',
        'serviceSwiper':'0px 4px 158px 0px #8D50EF4D',
        'team':'-11.199999809265137px 8.800000190734863px 64px 0px #120F2E59',
        'portfolioDetail':'0px 0px 62.400001525878906px 0px #00000014',
        'slide': '0px 4.669078826904297px 184.42861938476562px 0px #8D50EF80',
        'avatar': '0px 4px 80px 0px #8D50EF',
      },
      maxWidth:{
        'content':'1536px',
      },
    }
},
  plugins: [],
}

