<template>
  <div class="admin-editor">
    <create-content />
    <div
      class="admin-editor_created"
      v-for="content in createdContent"
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
import CreateContent from './CreateContent.vue';
import { Component, Vue } from 'nuxt-property-decorator';
interface IContent {
  title: string;
  text: string[];
  picture: any;
}
@Component({
  components: {
    CreateContent
  }
})
export default class AdminEditor extends Vue {
  private content: IContent = {
    title: '',
    text: [],
    picture: {}
  };
  private createdContent: object[] = [];

  mounted() {
    this.createdContent = JSON.parse(localStorage.getItem('createdContent'));
  }
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
