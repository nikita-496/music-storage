import { Component, mixins } from 'nuxt-property-decorator';
import AudioEventHandler from './AudioEventHandler';
import AudioPlayer from './AudioPlayer';
import AudioTimer from './AudioTimer';
@Component({
  mixins: [AudioTimer, AudioEventHandler, AudioPlayer]
})
export default class AudioControl extends mixins(AudioTimer, AudioEventHandler, AudioPlayer) {
  private audio: HTMLAudioElement;
  mounted() {
    if(!this.audio) {
      this.audio = new Audio();
      this.audio.volume = this.$store.getters['player/getVolume'] / 100

      this.setDuration(this.audioState)
      this.setCurrentTime(this.audioState)
  
      this.eventBus(this.audioState)
    }
  }
  get playerPause() {
    return this.$store.getters['player/isPause'];
  }
  get audioState() {
    return this.audio
  } 
  set audioState(newVal: string) {
    this.audio.src = newVal
  }
}