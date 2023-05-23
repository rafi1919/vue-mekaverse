<template>
  <div id="app">
    <div id='nav'>
      <top-nav></top-nav>
    </div>
    <router-view/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
export default{
  name:'App',
  components: {'top-nav': Navbar},
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --roboto:'Roboto';
  --power:'PowerGrotesk';
  --font-base:300;
  --font-bold:700;
  --font-black:900;

}

:root {
    --bs-theme-trans: rgba(15, 5, 29, 0.8);
    --bs-theme:#0f051d;
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    
    --tg-rgba-1: rgba(255, 255, 255, 0.05);
    --tg-body-color: #B7B4BB;

    --color--black: #000000;
    --color--cyan-bluish-gray: #abb8c3;
    --color--white: #ffffff;
    --color--vivid-green-cyan: #00d084;
    --color--pale-cyan-blue: #8ed1fc;
    --color--vivid-cyan-blue: #0693e3;
    --color--vivid-purple: #9b51e0;
    --gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
    --gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
    --gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
    --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);
    --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
    --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
    --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
    --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
    --wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
    --wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
    --wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
    --wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
}

@font-face {
    font-family: 'PowerGrotesk';
    src: url('~@/assets/font/PowerGrotesk-Regular.ttf') format('truetype');
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.border{
    margin: 50px 0;
      border: none;
}

body {
  background: var(--bs-theme);
  background-repeat: no-repeat;
  background-attachment: fixed;
}

 h3{
        font-size: 10vh;
        font-weight: bolder;
        color: var(--color--white);
        padding: 50px;
        font-family: var(--power);
    }

  @media (max-width: 992px) { 

    h3{
            font-size: 6vh;
        }

  }
</style>
