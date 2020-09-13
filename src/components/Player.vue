<style scoped>
.player {
  box-sizing: border-box;
}
.feather {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>

<template>
  <article class="player">
    <audio src="/media/bach-test.ogg"></audio>
    <svg class='feather'>
      <use xlink:href="/img/icons/feather-icons/feather-sprite.svg#skip-back" />
    </svg>
    <svg class='feather'>
      <use xlink:href="/img/icons/feather-icons/feather-sprite.svg#play" />
    </svg>
    <svg class='feather'>
      <use xlink:href="/img/icons/feather-icons/feather-sprite.svg#pause" />
    </svg>
    <svg class='feather'>
      <use xlink:href="/img/icons/feather-icons/feather-sprite.svg#square" />
    </svg>
    <svg class='feather'>
      <use xlink:href="/img/icons/feather-icons/feather-sprite.svg#skip-forward" />
    </svg>
    <svg class='feather'>
      <use xlink:href="/img/icons/feather-icons/feather-sprite.svg#upload" />
    </svg>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Player extends Vue {
  @Prop() private msg!: string;
}
</script>
