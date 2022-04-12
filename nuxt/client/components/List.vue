<template>
  <ul class="list">
    <li class="list__items" v-for="content in contents" :key="content._id">
      <span class="list__header">{{ content.title }}</span>
      <div class="list__content">
        <item
          :paragraphs="JSON.parse(content.text)"
          :picture="content.picture"
        ></item>
      </div>
    </li>
    <li class="list__items">
      <NuxtLink class="list__items-signin" to="/">
        Зарегистрироваться
      </NuxtLink>
    </li>
    <li class="list__items">
      <NuxtLink class="list__items-login" to="/"> Войти </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import Item from './Item.vue';
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {
    Item
  }
})
export default class List extends Vue {
  @Prop([]) readonly contents: [];
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_media/publicLayout.scss';
@import '../assets/scss/_vars.scss';

.list {
  margin-top: 6em;
  padding: 0em 2em;
}
.list__items {
  margin-bottom: 1.5em;
  list-style: none;
}
.list__header {
  display: inline-block;
  font-size: 0.9375rem;
  font-family: $Lato;
  font-weight: 300;
  color: $second-gray;

  padding-bottom: 1.3em;
}
@include hideSidebars();
</style>
