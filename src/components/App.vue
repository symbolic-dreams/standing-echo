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
  --disabled-color: var(--palette2);
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
  align-items: stretch;
  background-color: var(--background-primary);
  color: var(--font-primary);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}
</style>

<template>
  <main id="app">
    <Player />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import Navigation from './Navigation.vue'
import Player from './Player.vue'
//import PlayList from './PlayList.vue';
//import Library from './Library.vue'

@Component({
  components: { Player }
})
export default class App extends Vue {
  created() {
    document.title = 'Standing Echo'
  }
}
</script>
