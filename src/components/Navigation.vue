<style scoped>
.navigation {
  box-sizing: border-box;
}
</style>

<template>
  <nav class="navigation">
    <h2>{Navigation}</h2>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
  @Prop() private msg!: string;
}
</script>

