<template>
  <div class="content">
    <p class="content__text">{{ text }}</p>
    <img class="content__img" :src="picture" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, requred: true },
    picture: { type: String, requred: true }
  }
};
</script>
