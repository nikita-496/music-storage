<template>
  <main class="main">
    <div class="container">
      <div class="card-tracks">
        <h2 class="title">Тренды</h2>
        <track-list :tracks="tracks" />
      </div>
    </div>
  </main>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import Tracks from '../../mixins/trackList/Tracks';
@Component({
  mixins: [Tracks]
})
export default class Trends extends mixins(Tracks) {
  mounted() {
    this.tracks = 'Тренды';
  }
}
</script>

<style lang="scss" scoped></style>
