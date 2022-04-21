import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class AudioTimer extends Vue { 
  public setDuration(audio: HTMLAudioElement) {
    audio.onloadedmetadata = () => {
      this.$store.dispatch(
        'player/setDuration',
        Math.ceil(audio.duration)
      );
    };
  }
  public setCurrentTime(audio: HTMLAudioElement) {
    audio.ontimeupdate = () => {
      this.$store.dispatch(
        'player/setCurrentTime',
        Math.ceil(audio.currentTime)
      );
    };
  }
}