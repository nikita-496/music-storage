import { Component, Vue } from 'nuxt-property-decorator';
import { eventBus } from '../eventBus';

@Component
export default class AudioEventHandler extends Vue { 
  public eventBus(audio: HTMLAudioElement) {
    eventBus.$on('changeVolume', (volume) => {
      audio.volume = volume / 100;
    });
    eventBus.$on('changeCurrentTime', (currentTime) => {
      audio.currentTime = currentTime;
    });
  }
}