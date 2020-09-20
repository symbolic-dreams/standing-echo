<style>
:root {
  --palette0: rgb(14, 30, 37);
  --palette1: #292F33;
  --palette2: #66757F;
  --palette3: #CCD6DD;
  --palette4: #E1E8ED;
  --palette5: #FFFFFF;
  --palette6: #000000;
  --palette7: rgb(4,20,27);

  --background-primary: var(--palette0);
  --background-gradient: linear-gradient(0deg, var(--palette6), transparent);
  --font-primary: var(--palette4);
  --disabled-color: var(--palette2);
}

html, body {
  background-color: var(--palette6);
  font-family: "Noto Sans","Lucida Grande","Lucida Sans","Segoe UI",sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
  width: 100%;
}

#app {
  align-items: stretch;
  color: var(--font-primary);
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 8.5in;
  overflow: auto;
}

.player {
  background-color: var(--background-primary);
}
</style>

<template>
  <main id="app">
    <player />
    <playlist />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import Navigation from './Navigation.vue'
import Player from './Player.vue'
import Playlist from './Playlist.vue'
//import Library from './Library.vue'

@Component({
  components: { Player, Playlist }
})
export default class App extends Vue {
  created() {
    document.title = 'Standing Echo'
  }
}
</script>
