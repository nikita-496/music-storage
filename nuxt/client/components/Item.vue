<template>
  <div class="item">
    <NuxtLink
      class="item__link"
      :to="text === 'Создание контента' ? '/admin' : '/'"
      v-for="text in paragraphs"
      :key="text"
    >
      {{ text }}
    </NuxtLink>
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

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
@import '../assets/scss/_media/publicLayout.scss';

.item__img {
  width: 23px;
  height: 23px;
}
.item__link {
  display: block;
  font-size: 1.125rem;
  font-family: $Lato;
  padding-bottom: 1em;
  text-decoration: none;
  color: $gray;
}
@include hideSidebars();
</style>
