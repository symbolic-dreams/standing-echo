<style scoped>
button {
  background: transparent;
  border: none;
  color: currentColor;
  height: 0.5in;
  width: 0.5in;
  display: inline-flex;
  align-items: center;
  justify-content: center;    
}
</style>

<template>
    <button class="player-button" type="button" v-on:click="$emit('click')">
        <feather-icon class="skip-back" v-bind:icon="icon" />
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FeatherIcon from './FeatherIcon.vue'

@Component({
  components: { FeatherIcon }
})
export default class PlayerButton extends Vue {
  @Prop() private icon!: string;
}
</script>