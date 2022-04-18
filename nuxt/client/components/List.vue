<template>
  <ul class="list">
    <slot name="header"></slot>
    <div class="list__content">
      <slot name="item"> </slot>
    </div>
    <slot name="auth"> </slot>
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
  margin-top: 1em;
  padding-left: 2em;
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
