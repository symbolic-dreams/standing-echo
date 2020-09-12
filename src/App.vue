<style>
:root {
  --palette0: #0169CE;
  --palette1: #292F33;
  --palette2: #66757F;
  --palette3: #CCD6DD;
  --palette4: #E1E8ED;
  --palette5: #FFFFFF;
  --palette6: #000000;

  --background-primary: var(--palette6);
  --font-primary: var(--palette4);
}

html, body {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans","Lucida Grande","Lucida Sans","Segoe UI",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

#app {
  background-color: var(--background-primary);
  color: var(--font-primary);
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>

<template>
  <main id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    -->
    <h1>Hello World</h1>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: { }
})
export default class App extends Vue {}
</script>
