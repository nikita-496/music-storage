<template>
  <div class="item">
    <div v-if="Array.isArray(paragraphs)">
      <div v-for="(text, i) in paragraphs" :key="text">
        <NuxtLink
          v-show="isVisible"
          class="item__link"
          :to="text === 'Создание контента' ? '/admin' : '/'"
        >
          {{ text }}
        </NuxtLink>
        <img
          v-if="pictures.length !== 0"
          class="item__img"
          :src="`http://localhost:4000/${pictures[i]}`"
          :alt="`Иконка ссылки ${text}`"
        />
      </div>
    </div>
    <div v-else>
      <NuxtLink
        v-show="isVisible"
        class="item__link"
        :to="paragraphs === 'Создание контента' ? '/admin' : '/'"
      >
        {{ paragraphs }}
      </NuxtLink>
      <img
        v-if="pictures.length !== 0"
        class="item__img"
        :src="`http://localhost:4000/${pictures[i]}`"
        :alt="`Иконка ссылки ${paragraphs}`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { eventBus } from '../eventBus';
export default {
  props: {
    paragraphs: { type: [], require: true },
    pictures: { type: [], require: true }
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
  display: inline-block;
  font-size: 1.125rem;
  font-family: $Lato;
  padding-bottom: 1em;
  text-decoration: none;
  color: $gray;
}
@include hideSidebars();
</style>
