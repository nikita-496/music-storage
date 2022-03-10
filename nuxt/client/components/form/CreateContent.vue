<template>
  <form class="create-content" method="post" @submit.prevent="create">
    <text-field
      :createdTitle="createdTitle"
      :createdText="createdText"
      :textAreas="textAreas"
      @onChangeTitle="setTitle"
      @onChangeText="setText"
      @addTextArea="setTextArea"
      @removeTextArea="delTextArea"
    />
    <file-upload @onChangeFile="setFile">
      <button @click.prevent>Загрузите изображение</button>
    </file-upload>
    <button class="btn create-content__btn">Создать</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import ContentService from '../../service/ContentService';
import TextField from '../input/TextField.vue';
import { v4 as uuidv4 } from 'uuid';
interface IContent {
  title: string;
  text: string[];
  picture: any;
}
@Component({
  components: {
    TextField
  }
})
export default class CreateContent extends Vue {
  @Prop(String) createdTitle: string;
  @Prop(String) createdText: string[];
  @Prop(String) id: string;
  private content: IContent = {
    title: '',
    text: [],
    picture: {}
  };
  private textAreas: any = [];
  private createdContent: object[] = [];
  private key = '';
  mounted() {
    if (localStorage.getItem('createdContent')) {
      this.createdContent = JSON.parse(localStorage.getItem('createdContent'));
    }
    const v4options = {
      random: [
        0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1,
        0x67, 0x1c, 0x58, 0x36
      ]
    };
    if (!this.createdTitle) {
      this.key = uuidv4(v4options);
    } else {
      this.key = this.id;
      console.log(this.key);
    }

    if (sessionStorage.getItem('textAreas')) {
      const parsedTextAreas = JSON.parse(sessionStorage.getItem('textAreas'));
      console.log(parsedTextAreas);
      console.log(this.key);
      this.textAreas = parsedTextAreas[this.key];
    }
  }
  public setTitle(title: string) {
    this.content.title = title;
  }
  public setText(text: string[]) {
    this.content.text = text;
  }
  public setFile(file: {}) {
    this.content.picture = file;
  }

  public setTextArea() {
    this.textAreas.push(this.textAreas.length + 1);
    sessionStorage.setItem(
      'textAreas',
      JSON.stringify({
        ...JSON.parse(sessionStorage.getItem('textAreas')),
        [this.key]: this.textAreas
      })
    );
  }
  public delTextArea() {
    this.textAreas.pop();
    sessionStorage.setItem(
      'textAreas',
      JSON.stringify({
        ...JSON.parse(sessionStorage.getItem('textAreas')),
        [this.key]: this.textAreas
      })
    );
  }

  public setCreatedContent(resContent) {
    this.createdContent.push(resContent);
    localStorage.setItem('createdContent', JSON.stringify(this.createdContent));
  }

  public updateKey(resId) {
    const storageValue = sessionStorage.getItem('textAreas');
    const tempKey = this.key;
    this.key = resId;
    sessionStorage.setItem(
      'textAreas',
      JSON.stringify({
        ...JSON.parse(storageValue),
        [tempKey]: [],
        [this.key]: this.textAreas
      })
    );
  }

  public create() {
    const formData = new FormData();
    formData.append('title', this.content.title);
    formData.append('text', JSON.stringify(this.content.text));
    formData.append('picture', this.content.picture[0]);
    ContentService.save(formData).then((res) => {
      this.setCreatedContent(res.data);
      this.updateKey(res.data._id);
    });
  }
}
</script>

<style lang="scss" scoped></style>
