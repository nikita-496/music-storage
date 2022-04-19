<template>
  <div class="track-item">
    <img
      class="track-item__image-state"
      :src="
        isActive
          ? require('../assets/images/icons/pause.svg')
          : require('../assets/images/icons/play.svg')
      "
      :alt="isActive ? 'Приостановить трек' : 'Запустить трек'"
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
import playButton from '../mixins/playButton';
@Component({
  mixins: [playButton],
  components: {
    List
  }
})
export default class TrackItem extends mixins(playButton) {
  @Prop(Object) track: object;
  private isActive: boolean = false;
  public changeTrackState() {
    this.play();
    this.isActive = !this.isActive;
  }
  public remove() {
    TrackService.delete(this.track, this.track._id);
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
