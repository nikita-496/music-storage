<template>
  <form method="post" @submit.prevent="send">
    <label class="admin-editor__label" for="titleInput"
      >Заголовок контента</label
    >
    <input
      class="admin-editor__input"
      type="text"
      id="titleInput"
      v-model="content.title"
    />
    <label class="admin-editor__label" for="textInput" ref="textAreaLabel">
      <br />Текст контента <br />
      <textarea
        class="admin-editor__area"
        type="text"
        name=""
        id="textInput"
        v-model="content.text[0]"
      />
      <template v-if="textAreas.length">
        <textarea
          v-for="n in textAreas"
          :key="n"
          class="admin-editor__area"
          type="text"
          name=""
          id="textInput"
          v-model="content.text[n]"
        />
      </template>
      <button class="btn admin-editor__btn" @click="addTextArea">+</button>
      <button class="btn admin-editor__btn" @click="removeTextArea">-</button>
    </label>
    <label class="admin-editor__label" for="file"
      >Изображение контента
      <file-upload
        data-test="file-upload-component"
        name="picture"
        @on-change-file="setFile"
      >
        <button @click.prevent>Загрузите изображение</button>
      </file-upload>
    </label>

    <button class="btn admin-editor__btn">Отправить</button>
  </form>
</template>

<script lang="ts">
import FileUpload from '../FileUpload.vue';
import ContentService from '../../service/ContentService';
import { Component, Vue } from 'nuxt-property-decorator';
interface ContentInterface {
  title: string;
  text: string[];
  picture: any;
}
@Component({
  components: {
    FileUpload
  }
})
export default class AdminEditor extends Vue {
  private content: ContentInterface = {
    title: '',
    text: [],
    picture: {}
  };
  private textAreas: any = [];

  mounted() {
    if (sessionStorage.getItem('textAreas')) {
      this.textAreas = sessionStorage.getItem('textAreas').split(',');
    }
  }
  public addTextArea() {
    this.textAreas.push(this.textAreas.length + 1);
    sessionStorage.setItem('textAreas', this.textAreas);
  }
  public removeTextArea() {
    this.textAreas.pop();
    sessionStorage.setItem('textAreas', this.textAreas);
  }
  public setFile(formData: {}) {
    this.content.picture = formData;
  }
  public send() {
    const formData = new FormData();
    formData.append('title', this.content.title);
    formData.append('text', JSON.stringify(this.content.text));
    formData.append('picture', this.content.picture[0]);
    ContentService.save(formData);
  }
}
</script>
