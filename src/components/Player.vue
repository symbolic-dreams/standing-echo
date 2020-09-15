<style scoped>
[hidden] {
  display: none;
}
.player {
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 2in;
  justify-content: center;
  max-width: 8.5in;
  position: relative;
}

.controls {
  text-align: center;
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
    <audio
     v-on:loadedmetadata="loadedMetadata"
     v-on:timeupdate="timeUpdate"
    ></audio>
    <input type='file' id='browse' accept="audio/*" v-on:change="browse">
    <seekbar :currentTime="currentTime" :duration="duration" v-on:seek-click="seekClick" />
    
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
        title="Pause" />
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
    <volume 
     :loudness="volume"
     :muted="isMuted"
     v-on:volume-change="volumeChange" 
     v-on:max-vol="maxVolume" 
     v-on:mute-vol="muteVolume" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PlayerButton from './PlayerButton.vue'
import Seekbar from './Seekbar.vue'
import Volume from './Volume.vue'

@Component({
  components: { PlayerButton, Volume, Seekbar }
})
export default class Player extends Vue {
  private elAudio!: HTMLAudioElement
  private elBrowse!: HTMLInputElement

  currentTime = 0
  duration = 0
  isPaused = false
  isMuted = false
  trackIndex = -1
  tracks: string[] = []
  volume = 0

  browse(e: Event) {
    const target = e.target as HTMLInputElement,
          files = target.files || []
    if(!files.length)
      return;

    this.pause()
    this.tracks.forEach(track => URL.revokeObjectURL(track))
    Object.assign(this, {
      tracks: Array.from(target.files || [], URL.createObjectURL),
      currentTime: 0,
      duration: 0,
      isMuted: false,
      trackIndex: 0,
      volume: 0
    })
    this.elAudio.src = this.tracks[0]
    this.play()
  }

  loadedMetadata() {
    this.duration = this.elAudio.duration
    this.volume = this.elAudio.volume
  }

  maxVolume() {
    this.volume = this.elAudio.volume = 1
  }

  muteVolume() {
    this.isMuted = this.elAudio.muted = !this.elAudio.muted
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
      this.isPaused = false
      await this.elAudio.play()
    }
  }

  seekClick(clickTime: number){
    this.elAudio.currentTime = clickTime;
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

  volumeChange(value: number) {
    this.volume = this.elAudio.volume = value
  }

  open(){
    this.elBrowse.click()
  }
}
</script>
