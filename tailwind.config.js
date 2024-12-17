
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        istok: ["'Istok_Web'", "sans-serif"], // Define Istok_Web for headings
        quantico: ["'Quantico'", "sans-serif"], // Define Quantico for paragraphs
      },

      screens: {
        zIndex: {
          '60': '60',
          '9999': '9999', // Custom high z-index value
        },
        screens: {
          // Reuse Tailwind's default breakpoints
          am: '400px',
          sm:  '550px',  
          md:  '768px' , 
          lg:  '1024px', 
          xl:  '1280px',
        },



      },
      borderImage: {
        'custom-gradient1': 'linear-gradient(133deg, rgba(237,0,255,1) 0%, rgba(0,225,255,1) 37%, rgba(254,171,29,1) 57%, rgba(237,0,255,1) 100%)',   },
      backgroundImage: {
        'text-custom-gradient': ' linear-gradient(130deg, rgba(254,171,29,1) 0%, rgba(237,0,255,1) 48%, rgba(0,225,255,1) 100%);',
        'custom-gradient': 'conic-gradient(from 90deg, #ED00FF 0%, #00E1FF 37%, #FEAB1D 57%, #ED00FF 100%) ',
 

        'custom-gradient2': 'linear-gradient(90deg, #FEAB1D 0%, #ED00FF 48.4%, #00E1FF 100%); ',
        'custom-gradientpresale': 'linear-gradient(90deg, rgba(254, 171, 29, 0.5) 0%, rgba(237, 0, 255, 0.5) 50%, rgba(0, 225, 255, 0.5) 100%)',
        'custom-gradient-token ': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 43%, rgba(0,0,0,1) 100%);',
       
 

        

        // 
        'roadmapline': ' linear-gradient(90deg, #fff0 0%, #ffffffe5 35% , #ffffffe5 65% ,  #fff0 98%)',
       
      },


      scrollbar: {
        width: {
          thin: '1px', // Adjust width as needed background: linear-gradient(0deg, #D9D9D9, #D9D9D9),
          
          
        },


        color: {
          track: 'bg-gray-200', // Track color
          thumb: 'bg-blue-500', // Thumb color
          hover: 'bg-blue-700', // Thumb hover color
        },
      },
      boxShadow: {
        'custom-drop': '0px 5px 20px #ed00ffab ', // Drop shadow
        'custom-inner': 'inset 0px 4px 30px #000000', // Inner shadow
        'custom-purple': '0px 0px 25px 23px rgba(97, 46, 165, 0.87)',
        'custom-token': "0px 0px 20px 11px rgba(151, 71, 255, 0.73)",
      },




      // roadmap card border properties
   
    }
    
  },
  plugins: [ require('tailwind-scrollbar')  ],
}