<template>
  <div id="home">
    <Header />
    <Collection />
    <Choose />
    <About />
    <!-- <Roadmap /> -->
    <Asked />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Collection from '@/components/Collection.vue'
import Choose from '@/components/Choose.vue'
import About from '@/components/About.vue'
import Roadmap from '@/components/Roadmap.vue'
import Asked from '@/components/Asked.vue'
import Footer from '@/components/Footer.vue'

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    Header,
    Collection,
    Choose,
    About,
    Roadmap,
    Asked,
    Footer

  }
}
</script>

<style scoped>

</style>
