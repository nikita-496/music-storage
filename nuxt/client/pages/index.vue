<template>
  <main class="main">
    <div class="container">
      <div class="card-tracks">
        <h2 class="title">Список всех треков</h2>
        <track-list :tracks="receivedTracks" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import Tracks from './../mixins/trackList/Tracks';

@Component({
  mixins: [Tracks]
})
export default class Index extends mixins(Tracks) {}
</script>

<style lang="scss" scoped></style>
