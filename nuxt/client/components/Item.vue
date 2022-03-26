<template>
  <div class="item">
    <p class="item__text" v-for="text in paragraphs" :key="text">
      {{ text }}
    </p>
    <img class="item__img" :src="`http://localhost:4000/${picture}`" alt="" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    paragraphs: { type: [], require: true },
    picture: { type: String, require: true }
  }
};
</script>
