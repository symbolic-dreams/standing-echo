<style scoped>
.playlist {
  box-sizing: border-box;
}
</style>

<template>
  <article class="playlist">
    <h2>{PlayList}</h2>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PlayList extends Vue {
  @Prop() private msg!: string;
}
</script>