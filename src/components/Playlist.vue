<style scoped>
.playlist {
  box-sizing: border-box;
}
</style>

<template>
  <details class="playlist">
    <summary>Playlist</summary>
  </details>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Playlist extends Vue {
  @Prop() private msg!: string;
}
</script>