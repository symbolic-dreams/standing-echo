<style scoped>
.playlist {
  background-color: var(--background-primary);
  border: 1px solid var(--palette6);
  border-collapse: collapse;
  box-sizing: border-box;
  width: 100%;
}
.playlist th {
    background: var(--background-gradient);
    border: 1px solid var(--palette6);
    resize: horizontal;
}
.playlist th, .playlist td {
    height: 2em;
    line-height: 2em;
    text-align: left;
    padding: 0.5em;
    user-select: none;
}
.playlist-empty td {
    text-align: center;
}
.playlist tr:nth-child(even) {
    background-color: var(--palette7)
}
.playlist tr.active {
    background-color: var(--palette8);
}
</style>

<template>
<table class="playlist">
    <thead>
        <tr>
            <th>Title</th>
            <th>Length</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody v-if="tracks.length == 0" class="playlist-empty">
        <tr><td colspan="3">&mdash; empty &mdash;</td></tr>
    </tbody>
    <tbody v-if="tracks.length">
        <tr v-for="track in tracks" :key="track.blobUrl" :class="{active: track === currentTrack}">
            <td>{{track.title}}</td>
            <td>{{track.durationString}}</td>
            <td>{{track.mimeType}}</td>
        </tr>
    </tbody>
</table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex'
import Track from '@/models/Track'

@Component({
    computed: mapGetters(['currentTrack','tracks'])
})
export default class Playlist extends Vue {
    // Type the mapped 'tracks' getter.
    tracks!: Track[]
    // Type the mapped 'currentTrack' getter.
    currentTrack!: Track;
}
</script>