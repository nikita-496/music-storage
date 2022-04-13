<template>
  <div class="item">
    <NuxtLink
      :class="
        isVisible
          ? 'item__link item__link_visible'
          : 'item__link item__link_none'
      "
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
import { eventBus } from '../eventBus';
export default {
  props: {
    paragraphs: { type: [], require: true },
    picture: { type: String, require: true }
  },
  data() {
    return {
      isVisible: true
    };
  },
  created() {
    eventBus.$on('change', (sidebarStatus) => (this.isVisible = sidebarStatus));
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
.item__link_visible {
  display: block;
}
.item__link_none {
  display: none;
}
@include hideSidebars();
</style>
