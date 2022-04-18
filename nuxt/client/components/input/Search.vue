<template>
  <div>
    <img
      class="search__image"
      src="../../assets/images/icons/search.svg"
      alt="search"
    />
    <app-input :value="placeholder" />
  </div>
</template>

<script lang="ts">
import AppInput from '../input/AppInput.vue';
import { Component, Vue } from 'nuxt-property-decorator';
@Component({
  components: {
    AppInput
  }
})
export default class Search extends Vue {
  private placeholder: string = 'Композиция, альбом, исполнитель ...';
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_vars.scss';

.search__image {
  position: relative;
  top: 32px;
  left: 10px;
  width: 20px;
  height: 20px;
}
</style>
