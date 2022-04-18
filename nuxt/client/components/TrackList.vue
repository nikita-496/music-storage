<template>
  <div class="play-list">
    <div class="play-list__header">
      <list>
        <template v-slot:item>
          <span class="play-list__header-item">#</span>
          <span class="play-list__header-item">Название</span>
          <span class="play-list__header-item">Артист</span>
          <span class="play-list__header-item">Продолжительность</span>
          <span class="play-list__header-item">Альбом</span>
        </template>
      </list>
    </div>
    <div v-for="track in tracks" :key="track._id">
      <track-item :track="track" />
    </div>
  </div>
</template>

<script lang="ts">
import List from './List.vue';
import TrackItem from './TrackItem.vue';
import { ITrack } from '../programm-interface/ComponentInterfaces';
import { Component, Vue, Prop } from 'nuxt-property-decorator';
@Component({
  components: {
    List,
    TrackItem
  }
})
export default class TrackList extends Vue {
  @Prop(Array) tracks: ITrack;
}
</script>

<style lang="scss" scoped>
.play-list {
  display: grid;
}
</style>
