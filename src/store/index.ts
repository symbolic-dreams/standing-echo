import Vue from 'vue'
import Vuex from 'vuex'
import Track from '@/models/Track'

Vue.use(Vuex)

async function calcDuration(blobUrl: string): Promise<number> {
    const audio = document.createElement('audio')
    const durationPromise = new Promise<number>(resolve => {
        audio.addEventListener('loadedmetadata', () => {
            // Chrome bug: https://bugs.chromium.org/p/chromium/issues/detail?id=642012
            if (audio.duration === Infinity) {
                audio.currentTime = Number.MAX_SAFE_INTEGER
                audio.ontimeupdate = () => {
                    audio.ontimeupdate = null
                    resolve(audio.duration)
                    audio.currentTime = 0
                }
            } else {
                resolve(audio.duration)
            }
        })
    })
    audio.src = blobUrl
    return durationPromise
}

// https://www.ictshore.com/vue/vuex-store-tutorial/
export default new Vuex.Store({
    strict: process?.env?.NODE_ENV !== 'production',
    state: {
        trackIndex: 0,
        tracks: Array<Track>() //JSON.parse(window.localStorage.getItem(TRACKS_KEY) || '[]')
    },
    getters: {
        currentTrack(state): Track {
            return state.tracks[state.trackIndex]
        },
        trackIndex(state): number {
            return state.trackIndex
        },
        tracks(state) {
            return state.tracks.slice(0)
        }
    },
    actions: {
        async addTrack({ commit }, {blob, defaultName}: {blob: Blob; defaultName: string}) {
            const blobUrl = URL.createObjectURL(blob)
            const track = new Track({
                blobUrl,
                duration: await calcDuration(blobUrl),
                mimeType: blob.type,
                title: defaultName
            })
            commit('addTrack', track)
        }
    },
    mutations: {
        addTrack(state, track: Track) {
            state.tracks.push(track)
        },
        setTrack(state, track: Track) {
            const i = state.tracks.indexOf(track)
            if (i < 0 || i > state.tracks.length)
                throw new TypeError('Index out of bounds')
            state.trackIndex = i
        },
        setTrackIndex(state, i: number) {
            if (i < 0 || i > state.tracks.length)
                throw new TypeError('Index out of bounds')
            state.trackIndex = i
        },
        clearTracks(state) {
            state.tracks.forEach(track => URL.revokeObjectURL(track.blobUrl))
            state.tracks = []
        }
    },
    plugins: []
})