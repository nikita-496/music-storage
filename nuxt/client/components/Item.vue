<template>
  <div class="items">
    <div v-if="Array.isArray(paragraphs)">
      <div class="item" v-for="(text, i) in paragraphs" :key="text">
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
        <span class="decorate"></span>
      </div>
    </div>
    <div v-else class="item">
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
      <span class="decorate"></span>
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
@import '../assets/scss/_media/sidebar.scss';

.item {
  display: flex;
  justify-content: space-between;
  &:hover .item__link {
    color: $black;
  }
  &:hover .decorate {
    display: inline-block;
  }
}
.decorate {
  perspective: 200px;
  display: none;
  width: 30px;
  height: 5px;
  &::before {
    border: 1px solid;
    transform: rotateX(1deg) rotate(-90deg);
    transform-origin: 80% 50%;
    border-radius: 5px 5px 0 0;
    height: 80%;
    width: 80%;
    position: absolute;
    content: '';
    background-color: $black;
  }
}
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
@include hideSidebar();
</style>
