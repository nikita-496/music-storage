<template>
  <ul class="list">
    <li class="list__items" v-for="content in contents" :key="content._id">
      <span v-show="isVisible" class="list__header">{{ content.title }}</span>
      <div class="list__content">
        <item
          :paragraphs="content.text"
          :pictures="JSON.parse(content.picture)"
        ></item>
      </div>
    </li>
    <li v-show="isVisible" class="list__items list__items">
      <NuxtLink v-show="isVisible" class="list__items-signin" to="/">
        Зарегистрироваться
      </NuxtLink>
    </li>
    <li v-show="isVisible" class="list__items list__items">
      <NuxtLink v-show="isVisible" class="list__items-login" to="/">
        Войти
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import Item from './Item.vue';
import { Component, Prop, Vue } from 'nuxt-property-decorator';

import { eventBus } from '../eventBus';

@Component({
  components: {
    Item
  }
})
export default class List extends Vue {
  @Prop([]) readonly contents: [];
  private isVisible: boolean = true;
  created() {
    eventBus.$on('change', (sidebarStatus) => (this.isVisible = sidebarStatus));
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_media/sidebar.scss';
@import '../assets/scss/_vars.scss';

.list {
  margin-top: 6em;
  padding-left: 2em;
}

.list__items {
  margin-bottom: 1.5em;
  list-style: none;
}
.list__header {
  display: block;
  font-size: 0.9375rem;
  font-family: $Lato;
  font-weight: 300;
  color: $second-gray;

  padding-bottom: 1.3em;
}
@include hideSidebar();
</style>
