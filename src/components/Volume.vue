<style scoped>
.volume {
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 0 1em;
}
progress {
    cursor: pointer;
    width: 100%;
}
</style>

<template>
    <article class="volume">
        <player-button 
         :icon="muteIcon" 
         v-on:click="$emit('mute-vol')"
         title="Mute" />
        <progress max="1" :value="loudness" v-on:click="volumeChange" />
        <player-button 
         icon="volume-2" 
         v-on:click="$emit('max-vol')"
         title="Max" />
    </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PlayerButton from './PlayerButton.vue'

@Component({
  components: { PlayerButton }
})
export default class Volume extends Vue {
  @Prop() private loudness!: number;
  @Prop() private muted!: boolean

  private elProgress!: HTMLProgressElement

  get muteIcon(): string {
      return this.muted ? 'volume-x' : 'volume-1'
  }

  mounted() {
      this.elProgress = this.$el.querySelector('progress') as HTMLProgressElement
  }

  volumeChange(e: MouseEvent){
    const tg = e.target as HTMLProgressElement,
          clickPos = (e.pageX  - tg.offsetLeft) / tg.offsetWidth;
    this.$emit('volume-change', clickPos)
  }
}
</script>