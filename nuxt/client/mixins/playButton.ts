import { Component, Vue} from 'nuxt-property-decorator';

@Component
export default class PlayButtons extends Vue {
  get playerState() {
    return this.$store.getters['player/isPause'];
  }
  public play() {
    const state = this.$store.getters['player/isPause'];
    state ? this.playTrack() : this.pauseTrack();
  }
  public pauseTrack() {
    this.$store.dispatch('player/pause');
  }
  public playTrack() {
    this.$store.dispatch('player/play');
  }
}