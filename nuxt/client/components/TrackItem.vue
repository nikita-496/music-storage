<template>
  <div class="track-item">
    <img
      class="track-item__image-state"
      :src="
        pause
          ? require('../assets/images/icons/play.svg')
          : require('../assets/images/icons/pause.svg')
      "
      :alt="pause ? 'Приостановить трек' : 'Запустить трек'"
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
import audioControl from '../mixins/audioControl';
import { eventBus } from '../eventBus';
@Component({
  mixins: [audioControl],
  components: {
    List
  }
})
export default class TrackItem extends mixins(audioControl) {
  @Prop(Object) track: object;

  mounted() {
    console.log(`${this.pause} - Монтированный`);
  }
  updated() {
    /* console.log(`${this.pause} - Обнволенный`);

    const rightOperand = this.trackToPlay !== this.track.audio;
    if (rightOperand) {
      this.play();
    }*/
    //alert(this.trackToPlay);
  }

  get pause() {
    if (this.track.audio === this.trackToPlay) {
      return this.playerPause;
    }
    return true;
  }
  get trackToPlay() {
    return this.$store.getters['player/getTrack'];
  }

  public changeTrackState() {
    this.$store.dispatch('player/setTrack', this.track.audio);
    this.audioState = `http://localhost:4000/${this.trackToPlay}`;
    this.play();
  }
  public remove() {
    TrackService.delete(this.track, this.track._id);
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
