<style scoped>
[hidden] {
  display: none;
}
.player {
  box-sizing: border-box;
  border-bottom: 1px solid brown;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2in;
  position: relative;
}
.seekbar {
  margin-right: 1em;
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
    <audio v-on:loadedmetadata="loadedMetadata" v-on:timeupdate="timeUpdate"></audio>
    <input type='file' id='browse' accept="audio/*" v-on:change="browse">
    <div>
      <input type="range" class="seekbar" min="0" :max="duration" :value="currentTime" />
      <time datetime="PT0H00M">{{ durationString }}</time>
    </div>
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

  currentTime = 0
  duration = 0
  isPaused = false
  trackIndex = -1
  tracks: string[] = []

  get durationString(): string {
    const d = new Date(1000 * this.duration).toISOString()
    return d.substr(11,2) == '00' ? d.substr(14, 5) : d.substr(11, 8)
  }

  browse(e: Event) {
    const target = e.target as HTMLInputElement
    this.pause()
    this.tracks.forEach(track => URL.revokeObjectURL(track))
    this.tracks = Array.from(target?.files || [], URL.createObjectURL)
    this.trackIndex = 0
    this.play()
  }

  mounted() {
    this.elAudio = this.$el.querySelector('audio') as HTMLAudioElement
    this.elBrowse = this.$el.querySelector('#browse') as HTMLInputElement
    this.isPaused = this.elAudio.paused
  }

  pause() {
    this.isPaused = true
    this.elAudio.pause()
  }

  async play() {
    if(!this.tracks.length) {
        return
    } else {
      const currentTrack = this.tracks[this.trackIndex]
      this.elAudio.src = currentTrack
      this.isPaused = false
      await this.elAudio.play()
    }
  }

  loadedMetadata() {
    this.duration = this.elAudio.duration
  }

  skipBack() {
    console.log('skipBack')
  }
  
  skipForward() {
    console.log('skipForward')
  }

  timeUpdate(){
    this.currentTime = this.elAudio.currentTime
  }

  open(){
    this.elBrowse.click()
  }
}
</script>
