<style scoped>
.seekbar {
  display: flex;
  flex-direction: row;
}
.seekbar time {
  margin: 0 1em;
}
.seekbar progress {
  cursor: pointer;
  width: calc(100% - 96px);
}
</style>

<template>
    <section class="seekbar">
      <time :datetime="currentTimeFormatString">{{ currentTimeString }}</time>
      <progress :max="duration" :value="currentTime" v-on:click="seekClick" />
      <time :datetime="durationFormatString">{{ durationString }}</time>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

function timeSpan(seconds: number): [string, string, string] {
  const d = new Date(1000 * seconds).toISOString()
  return d.substr(11, 8).split(':') as [string, string, string]
}

@Component
export default class PlayList extends Vue {
  @Prop() currentTime!: number;
  @Prop() duration!: number;

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

  seekClick(e: MouseEvent) {
    const tg = e.target as HTMLProgressElement,
          rect = tg.getBoundingClientRect(),
          clickPos = (e.pageX  - rect.left) / rect.width,
          clickTime = clickPos * this.duration;

    this.$emit('seek-click', clickTime)
  }
}
</script>