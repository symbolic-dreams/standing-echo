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
.playlist td:hover {
    cursor: pointer;
}
</style>

<template>
<table class="playlist">
    <thead>
        <th>Title</th>
        <th>Length</th>
        <th>Type</th>
    </thead>
    <tbody v-if="tracks.length == 0">
        <tr><td colspan="3">-- empty --</td></tr>
    </tbody>
    <tbody v-if="tracks.length">
        <tr v-for="track in tracks" :key="track.blobUrl">
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
    computed: mapGetters(['tracks'])
})
export default class Playlist extends Vue {
    // Type the mapped 'tracks' getter.
    tracks!: Track[]
}
</script>