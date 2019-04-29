<template>
  <div id="app">
    <Header />
    <Houses />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Houses from "./components/Houses.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'app',
  data () {
    return {
      house: {
        
      }
    }
  },
  created(){
    // eventBus.$on('activateTool', (activeTool) => {
    //   this.activeTool = activeTool;
    // });
  },
  methods: {

  },
  components: {
    Header,
    Houses,
    Footer
  }
}
</script>

<style>

body,
html { 
  min-height: 100%;
  background-color: #111111;
  font-size: 16px;
}

</style>
