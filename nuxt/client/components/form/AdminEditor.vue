<template>
  <div class="admin-editor">
    <create-content />
    <div
      class="admin-editor_created"
      v-for="content in contents"
      :key="content._id"
    >
      <create-content
        :createdTitle="content.title"
        :createdText="content.text"
        :id="content._id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CreateContent from './create-content/CreateContent.vue';
import { Component, Vue, Prop } from 'nuxt-property-decorator';
@Component({
  components: {
    CreateContent
  }
})
export default class AdminEditor extends Vue {
  @Prop([]) contents: object[];
}
</script>

<style scoped lang="scss">
.admin-editor__form {
  border: 1px dashed black;
  margin-bottom: 2em;
  &:hover {
    border: 1px solid rgb(113, 185, 214);
  }
}
</style>
