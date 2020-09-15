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
  align-items: stretch;
  height: 2in;
  position: relative;
}
.seekbar {
  display: flex;
  flex-direction: row;
}
.seekbar time {
  margin: 0 1em;
}
.seekbar progress {
  cursor: pointer;
  width: 100%;
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
    <section class="seekbar">
      <time :datetime="currentTimeFormatString">{{ currentTimeString }}</time>
      <progress :max="duration" :value="currentTime" v-on:click="progressClick" />
      <time :datetime="durationFormatString">{{ durationString }}</time>
    </section>
    
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
import Volume from './Volume.vue'

function timeSpan(seconds: number): [string, string, string] {
  const d = new Date(1000 * seconds).toISOString()
  return d.substr(11, 8).split(':') as [string, string, string]
}

@Component({
  components: { PlayerButton, Volume }
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

  get currentTimeString(): string {
    const [hh,mm,ss] = timeSpan(this.currentTime)
    return hh == '00' ? `${mm}:${ss}` : `${hh}:${mm}:${ss}`
  }

  get currentTimeFormatString(): string {
    const [hh,mm,ss] = timeSpan(this.currentTime)
    return `PT${hh}H${mm}M${ss}S`
  }

  get durationString(): string {
    const [hh,mm,ss] = timeSpan(this.duration)
    return hh == '00' ? `${mm}:${ss}` : `${hh}:${mm}:${ss}`
  }

  get durationFormatString(): string {
    const [hh,mm,ss] = timeSpan(this.duration)
    return `PT${hh}H${mm}M${ss}S`
  }

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

  progressClick(e: MouseEvent){
    const tg = e.target as HTMLProgressElement,
          clickPos = (e.pageX  - tg.offsetLeft) / tg.offsetWidth,
          clickTime = clickPos * this.elAudio.duration;

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
