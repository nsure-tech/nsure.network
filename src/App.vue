<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer,
  }
}
</script>


<style lang="less">
@font-face {
  font-family: Open Sans;
  src:url('./assets/font/OpenSans-Regular.ttf')
}
#app {
  font-family: Open Sans,Avenir,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
</style>

