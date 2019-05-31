<template>
  <div id="app">
    <Header />
    <Houses />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Houses from "./components/Houses.vue";

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
    Houses
  }
}
</script>

<style>

body,
html { 
  min-height: 100%;
  background-color: #ffffff;
  font-size: 16px;
}

.houses .house .mb-5 {
  padding: 0;
}

</style>
