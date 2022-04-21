import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class AudioPlayer extends Vue { 
  public play(audio: HTMLAudioElement, isPause: boolean) {
      isPause ? this.playTrack(audio) : this.pauseTrack(audio);
  }
  public pauseTrack(audio: HTMLAudioElement) {
    this.$store.dispatch('player/pause');
    audio.pause()  
  }
  public playTrack(audio: HTMLAudioElement) {
    this.$store.dispatch('player/play');
    audio.play()
  }
}