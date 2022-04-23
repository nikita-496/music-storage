<template>
  <main>
    <div class="container">
      <carousel :carouselData="contents" :interval="2000" />
      <div class="card-tracks">
        <h2 class="title">Список всех треков</h2>
        <track-list :tracks="receivedTracks" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import ContenService from '../service/ContentService';
import Tracks from './../mixins/trackList/Tracks';

@Component({
  mixins: [Tracks]
})
export default class Index extends mixins(Tracks) {
  private contents: object[] = [];
  mounted() {
    ContenService.get().then((r) => {
      const target = r.data.reverse();
      this.contents = ContenService.filterContent(target, 'Карусель');
    });
  }
}
</script>

<style lang="scss" scoped></style>
