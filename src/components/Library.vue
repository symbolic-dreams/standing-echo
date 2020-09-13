<style scoped>
.library {
  box-sizing: border-box;
}
</style>

<template>
  <article class="library">
    <h2>{Library}</h2>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Libary extends Vue {
  @Prop() private msg!: string;
}
</script>

