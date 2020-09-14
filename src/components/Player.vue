<style scoped>
[hidden] {
  display: none;
}
.player {
  box-sizing: border-box;
  border-bottom: 1px solid brown;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 2in;
  position: relative;
}
.controls {
  border: none;
}
#browse {
  width: 1px;
  height: 1px;
  position: relative;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  opacity: 0.1;
}
#play {
  border: 1px solid currentColor;
  padding-left: 0.1in;
}
.player-button {
  position: relative;
  border-radius: 50%;
}
.player-button:disabled {
  color: var(--disabled-color);
}
</style>

<template>
  <article class="player">
    <audio></audio>
    <input type='file' id='browse' accept="audio/*" v-on:change="browse">
    <fieldset class="controls">
      <player-button
       icon="skip-back"
       v-on:click="skipBack"
       :disabled="trackIndex <= 0" 
       title="Previous" />
      <player-button 
       icon="play"
       v-on:click="play"
       :disabled="trackIndex == -1"
       :hidden="!isPaused"
       title="Play" />
      <player-button
        icon="pause"
        v-on:click="pause"
        :disabled="trackIndex == -1"
        :hidden="isPaused"
        title="Pause"
       />
      <player-button 
       icon="skip-forward" 
       v-on:click="skipForward" 
       :disabled="trackIndex == -1 || trackIndex >= tracks.length - 1"
       title="Next" />
      <player-button 
       icon="folder" 
       v-on:click="open" 
       title="Open file(s)" />
    </fieldset>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PlayerButton from './PlayerButton.vue'

@Component({
  components: { PlayerButton }
})
export default class Player extends Vue {
  private elAudio!: HTMLAudioElement
  private elBrowse!: HTMLInputElement

  mounted(){
    this.elAudio = this.$el.querySelector('audio') as HTMLAudioElement
    this.elBrowse =  this.$el.querySelector('#browse') as HTMLInputElement
    this.$data.isPaused = this.elAudio.paused
  }

  data() {
    return {
      isPaused: false,
      trackIndex: -1,
      tracks: []
    }
  }

  pause() {
    this.$data.isPaused = true
    this.elAudio.pause()
  }

  async play() {
    if(!this.$data.tracks.length) {
        return
    } else {
      const currentTrack = this.$data.tracks[this.$data.trackIndex]
      this.elAudio.src = currentTrack
      this.$data.isPaused = false
      await this.elAudio.play()
    }
  }

  browse(e: Event) {
    const target = e.target as HTMLInputElement
    this.pause()
    this.$data.tracks = Array.from(target?.files || [], URL.createObjectURL)
    this.$data.trackIndex = 0
    this.play()
  }

  skipBack() {
    console.log('skipBack')
  }
  skipForward() {
    console.log('skipForward')
  }
  open(){
    this.elBrowse.click()
  }
}
</script>
