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
  background: var(--background-gradient);
  border-radius: 50%;
  margin: 0 1em;
  position: relative;
}
.player-button:disabled {
  color: var(--disabled-color);
}
</style>

<template>
  <article class="player">
    <audio
      :src="currentTrack && currentTrack.blobUrl || ''"
      v-on:loadedmetadata="loadedMetadata"
      v-on:timeupdate="timeUpdate"
      v-on:ended="ended"
    ></audio>
    <input type="file" id="browse" accept="audio/*" v-on:change="browse" multiple />
    <seekbar
      :currentTime="currentTime"
      :duration="currentTrack && currentTrack.duration || 0"
      v-on:seek-click="seekClick"
    />

    <fieldset class="controls">
      <player-button
        icon="skip-back"
        v-on:click="skipBack"
        :disabled="trackIndex <= 0"
        title="Previous"
      />
      <player-button
        icon="play"
        v-on:click="play"
        :disabled="!currentTrack"
        :hidden="!isPaused"
        title="Play"
      />
      <player-button
        icon="pause"
        v-on:click="pause"
        :disabled="!currentTrack"
        :hidden="isPaused"
        title="Pause"
      />
      <player-button
        icon="skip-forward"
        v-on:click="skipForward"
        :disabled="!currentTrack || trackIndex >= tracks.length - 1"
        title="Next"
      />
      <player-button icon="folder" v-on:click="open" title="Open file(s)" />
    </fieldset>
    <volume
      :loudness="volume"
      :muted="isMuted"
      v-on:volume-change="volumeChange"
      v-on:max-vol="maxVolume"
      v-on:mute-vol="muteVolume"
    />
  </article>
</template>

<script lang="ts">
import Track from "@/models/Track";
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import PlayerButton from "./PlayerButton.vue";
import Seekbar from "./Seekbar.vue";
import Volume from "./Volume.vue";

@Component({
  components: { PlayerButton, Volume, Seekbar },
  computed: mapGetters(["currentTrack", "trackIndex", "tracks"]),
})
export default class Player extends Vue {
  private elBrowse!: HTMLInputElement;
  private elAudio!: HTMLAudioElement;

  // Type the mapped 'currentTrack' getter.
  currentTrack!: Track;
  // Type the mapped 'trackIndex' getter.
  trackIndex!: number;
  // Type the mapped 'tracks' getter
  tracks!: Track[];
  currentTime = 0;
  isMuted = false;
  volume = 0;

  private isPaused = true;
  pause() {
    this.isPaused = true;
    this.elAudio.pause();
  }

  async browse(e: Event) {
    const target = e.target as HTMLInputElement,
      files = Array.from(target.files || []);
    if (!files.length) return;

    this.pause();
    this.currentTime = 0;
    this.$store.commit("clearTracks");
    await Promise.all(
      [...files].map((file) =>
        this.$store.dispatch("addTrack", { blob: file, defaultName: file.name })
      )
    );
    this.$store.commit("setTrackIndex", 0);

    this.elAudio.load()
    this.play();
  }

  ended() {
    if(this.currentTime >= this.currentTrack.duration) {
      this.skipForward()
    } else {
      console.log('PAUSE')
      this.pause()
    }
  }

  loadedMetadata() {
    this.play()
    this.volume = this.elAudio.volume;
  }

  maxVolume() {
    this.volume = this.elAudio.volume = 1;
  }

  muteVolume() {
    this.isMuted = this.elAudio.muted = !this.elAudio.muted;
  }

  mounted() {
    this.elAudio = this.$el.querySelector("audio") as HTMLAudioElement;
    this.elBrowse = this.$el.querySelector("#browse") as HTMLInputElement;
  }

  play() {
    this.isPaused = false;
    this.elAudio.play();
  }

  seekClick(clickTime: number) {
    if (this.currentTrack) this.elAudio.currentTime = clickTime;
  }

  skipBack() {
    this.pause()
    this.currentTime = 0
    if(this.trackIndex <= 0)
      return;
    this.$store.commit('setTrackIndex', this.trackIndex - 1)
  }

  skipForward() {
    this.pause()
    this.currentTime = 0
    if(!this.currentTrack || this.trackIndex >= this.tracks.length - 1)
      return;

    this.$store.commit('setTrackIndex', this.trackIndex + 1)
  }

  timeUpdate() {
    this.currentTime = this.elAudio.currentTime;
  }

  volumeChange(value: number) {
    this.volume = this.elAudio.volume = value;
  }

  open() {
    this.elBrowse.click();
  }
}
</script>
