<template>
  <form class="create-content" @submit.prevent="">
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
    <button class="btn create-content__btn" @click="create">Создать</button>
    <button class="btn delete-content__btn" @click="remove">Удалить</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import ContentService from '../../../service/ContentService';
import TextAreas from '../create-content/TextAreas';
import TextField from '../../input/TextField.vue';
import { v4 as uuidv4 } from 'uuid';
import {
  ITextAreas,
  IContent
} from '../../../programm-interface/ComponentInterfaces';
@Component({
  components: {
    TextField
  }
})
export default class CreateContent extends Vue {
  @Prop(String) createdTitle: string;
  @Prop(Array) createdText: string[];
  @Prop(String) id: string;
  private content: IContent = {
    title: '',
    text: [],
    picture: {}
  };
  private textAreas: string[] = [];
  private tempId: string | null = '';

  mounted() {
    this.generateTempId();

    const allTextAreas: ITextAreas = new TextAreas(localStorage).textAreas;
    if (allTextAreas) {
      const key = this.getKey();
      if (key) {
        this.textAreas = allTextAreas[key];
      } else {
        throw new Error('Ключ отсутсвует');
      }
    }
  }

  public generateTempId() {
    const v4options = {
      random: [
        0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1,
        0x67, 0x1c, 0x58, 0x36
      ]
    };
    this.tempId = uuidv4(v4options);
  }

  public getKey(): string | null {
    let key: string | null;
    if (!this.id) {
      key = this.tempId;
    } else {
      this.tempId = null;
      key = this.id;
    }
    return key;
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

  public setTextArea(value) {
    console.log(value);
    if (this.tempId) {
      new TextAreas(localStorage).textAreas = {
        [this.tempId]: this.textAreas
      };
    } else {
      new TextAreas(localStorage).textAreas = {
        [this.id]: this.textAreas
      };
    }
  }

  public delTextArea(e: any) {
    let indexRemovedElement = Number(e.target.dataset.index);
    let key: string | null;

    if (this.id) {
      key = this.id;
    } else {
      key = this.tempId;
    }
    if (this.createdText) {
      this.removeText(indexRemovedElement);
    }
    if (key) {
      this.textAreas.pop();
      localStorage.setItem(
        'textAreas',
        JSON.stringify({
          ...JSON.parse(localStorage.getItem('textAreas') || '{}'),
          [key]: this.textAreas
        })
      );
    }
  }

  public removeText(indexText: number) {
    const parsedText = JSON.parse(String(this.createdText));
    parsedText.splice(indexText, 1);
    this.content.text = parsedText;
  }

  public createFormData() {}

  public create() {
    const formData = new FormData();
    formData.append('title', this.content.title);
    formData.append('text', JSON.stringify(this.content.text));
    formData.append('picture', this.content.picture[0]);
    ContentService.save(formData, this.id).then((res: any) => {
      new TextAreas(localStorage).rewriteValueKey(res.data._id, this.textAreas);
    });
  }
  public remove() {
    //const formData = this.createFormData();
    const formData = new FormData();
    formData.append('title', this.content.title);
    formData.append('text', JSON.stringify(this.content.text));
    formData.append('picture', this.content.picture[0]);
    ContentService.delete(formData, this.id);
  }
}
</script>

<style lang="scss" scoped></style>
