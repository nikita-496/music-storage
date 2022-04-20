import { Component, Vue } from 'nuxt-property-decorator';
import { eventBus } from '../eventBus';

@Component
export default class AudioControl extends Vue {
  private audio;
  mounted() {
    if(!this.audio) {
      this.audio = new Audio();
      this.audio.volume = this.$store.getters['player/getVolume'] / 100
      eventBus.$on('changeVolume', (volume) => {
        this.audioState.volume = volume / 100;
      });
      eventBus.$on('changeCurrentTime', (currentTime) => {
        this.audioState.currentTime = currentTime;
      });
      this.setDuration();
      this.setCurrentTime();
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
  public play() {
    const isPause = this.playerPause;
    if (!this.$store.getters['player/getTrack']) {
      alert("Выберите трек из для вопсроизвденения")

    } else{
      isPause ? this.playTrack() : this.pauseTrack();
    }
  }
  public pauseTrack() {
    this.$store.dispatch('player/pause');
    this.audioState.pause()  
  }
  public playTrack() {
    this.$store.dispatch('player/play');
    this.audioState.play()
  }

  public setDuration() {
    this.audioState.onloadedmetadata = () => {
      this.$store.dispatch(
        'player/setDuration',
        Math.ceil(this.audioState.duration)
      );
    };
  }
  public setCurrentTime() {
    this.audioState.ontimeupdate = () => {
      this.$store.dispatch(
        'player/setCurrentTime',
        Math.ceil(this.audioState.currentTime)
      );
    };
  }
}