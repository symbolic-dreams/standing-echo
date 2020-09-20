function timeSpan(seconds: number): [string, string, string] {
    const d = new Date(1000 * seconds).toISOString()
    return d.substr(11, 8).split(':') as [string, string, string]
  }

type TrackConstructorParams = {
    blobUrl: string;
    duration: number;
    mimeType: string;
    title: string;
}

export default class Track {
    readonly blobUrl!: string
    readonly fileType!: string
    readonly duration!: number
    readonly title!: string

    constructor(options: TrackConstructorParams) {
        Object.assign(this, options)
    }

    get durationString(): string {
        const [hh,mm,ss] = timeSpan(this.duration || 0)
        return hh == '00' ? `${mm}:${ss}` : `${hh}:${mm}:${ss}`
    }
}