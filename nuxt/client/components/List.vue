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
