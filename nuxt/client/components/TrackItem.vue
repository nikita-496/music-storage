<template>
  <div class="track-item">
    <img
      class="track-item__image-state"
      :src="
        displayTrackStatus()
          ? require('../assets/images/icons/play.svg')
          : require('../assets/images/icons/pause.svg')
      "
      :alt="displayTrackStatus() ? 'Приостановить трек' : 'Запустить трек'"
      @click="changeTrackState"
    />
    <list class="track-item__list">
      <template v-slot:item>
        <span class="play-list__content">1</span>
        <img
          class="play-list__content-image"
          :src="`http://localhost:4000/${track.picture}`"
        />
        <NuxtLink class="play-list__content" :to="`/tracks/${track._id}`">{{
          track.name
        }}</NuxtLink>
        <span class="play-list__content">{{ track.artist }}</span>
        <span class="play-list__content">3:12</span>
        <span class="play-list__content">Новый альбом</span>
      </template>
    </list>
    <img
      class="track-item__image-trash"
      src="../assets/images/icons/trash-alt.svg"
      alt="Удалить трек"
      @click="remove"
    />
  </div>
</template>

<script lang="ts">
import List from '../components/List.vue';
import { Component, mixins, Prop } from 'nuxt-property-decorator';
import TrackService from '../service/TrackService';
import AudioControl from '../mixins/AudioControl';
import { eventBus } from '../eventBus';
@Component({
  mixins: [AudioControl],
  components: {
    List
  }
})
export default class TrackItem extends mixins(AudioControl) {
  @Prop(Object) track: object;

  updated() {
    if (this.trackToPlay !== this.track.audio) {
      this.audioState.pause();
    }
  }

  get activeTraack() {
    return this.$store.getters['player/getActive'];
  }
  get trackToPlay() {
    return this.$store.getters['player/getTrack'];
  }
  public displayTrackStatus() {
    if (this.trackToPlay === this.track.audio) {
      return this.playerPause;
    } else {
      return true;
    }
  }

  public changeTrackState() {
    this.moveToanotherTrack();
    this.$store.dispatch('player/setTrack', this.track.audio);
    const isActaulTrack = this.trackToPlay === this.track.audio;
    if (!this.trackToPlay || isActaulTrack) {
      this.audioState = `http://localhost:4000/${this.trackToPlay}`;
      this.play(this.audioState, this.playerPause);
    }
  }
  public moveToanotherTrack() {
    this.$store.dispatch('player/setActive', this.track);
    const leftOperand = this.activeTraack.audio !== this.trackToPlay;
    const rightOperand = this.activeTraack && this.trackToPlay;
    if (leftOperand && rightOperand) {
      this.play(this.audioState, this.playerPause);
    }
  }
  public remove() {
    TrackService.delete(this.track, this.track._id);
  }

  public eventBus(audio: HTMLAudioElement) {
    eventBus.$on('changeVolume', (volume) => {
      audio.volume = volume / 100;
    });
    eventBus.$on('changeCurrentTime', (currentTime) => {
      audio.currentTime = currentTime;
    });
    eventBus.$on('changeTrackState', () => {
      if (this.trackToPlay === this.track.audio) {
        this.changeTrackState();
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.track-item__list {
  display: inline-block;
}
.play-list__content-image {
  width: 50px;
  height: 50px;
}
.track-item__image-trash {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>
