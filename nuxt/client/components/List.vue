<template>
  <ul class="list">
    <li class="list__items" v-for="item in contents" :key="item._id">
      <span class="list__header">{{ contents.title }}</span>
      <div class="list__content">
        <content></content>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Content from "./Content.vue";
export default {
  components: { Content },
  propps: {
    contents: { type: Array, requred: true },
  },
};
</script>
