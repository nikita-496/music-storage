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
import ContentService from '../../../service/ContentService';
import StorageManager from '../../../StorageManager';
import TextAreas from '../create-content/TextAreas';
import CreatedContent from '../create-content/CreatedContent';
import TextField from '../../input/TextField.vue';
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
  //private createdContent: object[] = [];
  private tempId: string | null = '';

  mounted() {
    /*if (localStorage.getItem('createdContent')) {
      this.createdContent = JSON.parse(localStorage.getItem('createdContent'));
    }*/
    /*if (new StorageManager(localStorage).createdContent) {
      this.createdContent = new StorageManager(localStorage).createdContent;
    }*/
    /*let key: string;
    if (!this.id) {
      const v4options = {
        random: [
          0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef,
          0xe1, 0x67, 0x1c, 0x58, 0x36
        ]
      };
      this.tempId = uuidv4(v4options);
      key = this.tempId;
      console.log(key);
    } else {
      this.tempId = null;
      key = this.id;
      console.log(key);
    }*/
    this.generateTempId();

    const allTextAreas = new TextAreas(localStorage).textAreas;
    console.log(this.tempId);
    if (allTextAreas) {
      //console.log(allTextAreas[this.generateKey()]);
      this.textAreas = allTextAreas[this.getKey()];
      /*if (!this.createdText) {
        this.textAreas = [];
      }*/
    }
  }

  /*writeToStorage(value: object) {
    localStorage.setItem('createdContent', JSON.stringify(value));
  }*/

  public generateTempId() {
    const v4options = {
      random: [
        0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1,
        0x67, 0x1c, 0x58, 0x36
      ]
    };
    this.tempId = uuidv4(v4options);
  }

  public getKey(): string {
    let key: string;
    if (!this.id) {
      key = this.tempId;
    } else {
      this.tempId = null;
      key = this.id;
    }
    console.log(key);
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

  public setTextArea() {
    /*this.textAreas.push(this.textAreas.length + 1);
    localStorage.setItem(
      'textAreas',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('textAreas')),
        [this.tempId]: this.textAreas
      })
    );*/
    //this.textAreas.push(this.textAreas.length + 1)
    if (this.tempId) {
      new TextAreas(localStorage).textAreas = [this.textAreas, this.tempId];
    } else {
      new TextAreas(localStorage).textAreas = [this.textAreas, this.id];
    }
    /*new StorageManager(localStorage).textAreas = [this.textAreas, this.tempId];*/
  }

  public delTextArea(e) {
    let indexRemovedElement = Number(e.target.dataset.index);
    let key: string;

    if (this.id) {
      key = this.id;
    } else {
      key = this.tempId;
    }
    if (this.createdText) {
      this.removeText(indexRemovedElement);
    }
    this.textAreas.pop();
    localStorage.setItem(
      'textAreas',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('textAreas')),
        [key]: this.textAreas
      })
    );
  }

  public removeText(indexText) {
    console.log(indexText);
    const parsedText = JSON.parse(this.createdText);
    console.log(typeof parsedText);
    console.log(parsedText);
    parsedText.splice(indexText, 1);
    console.log(parsedText);
    //this.createdText = parsedText;
    this.content.text = parsedText;
  }

  public setCreatedContent(resContent) {
    console.log(this.tempId);
    console.log(resContent._id);
    if (this.tempId === resContent._id) {
      //this.updateStorageValue(resContent);
    } else {
      //this.createdContent.push(resContent);
      new StorageManager(localStorage).createdContent = resContent;
      //this.writeToStorage(this.createdContent);
    }
  }

  /*public updateStorageValue(newValue: object) {
    const currStorageValues = JSON.parse(
      localStorage.getItem('createdContent')
    );
    let updatedStorageValue = currStorageValues.filter(
      (value) => value._id === this.tempId
    );
    const indexUpdatedValue = currStorageValues.indexOf(updatedStorageValue[0]);
    console.log(this.createdContent);
    this.createdContent[indexUpdatedValue] = newValue;
    console.log(this.createdContent);
    this.writeToStorage(this.createdContent);
  }*/

  /*public updateKey(resId) {
    const storageValue = localStorage.getItem('textAreas');
    const tempId = this.tempId;
    this.tempId = resId;
    localStorage.setItem(
      'textAreas',
      JSON.stringify({
        ...JSON.parse(storageValue),
        //[tempId]: [],
        [this.tempId]: this.textAreas
      })
    );
  }*/

  public create() {
    const formData = new FormData();
    formData.append('title', this.content.title);
    formData.append('text', JSON.stringify(this.content.text));
    formData.append('picture', this.content.picture[0]);
    ContentService.save(formData, this.id).then((res) => {
      /*if (this.tempId !== res.data._id) {
        new StorageManager(localStorage).createdContent = res.data;
      } else {
        new StorageManager(localStorage).updateCreatedContent(res.data);
      }*/
      /* if (!this.id) {
        new CreatedContent(localStorage).createdContent = res.data;
        new TextAreas(localStorage).rewriteValueKey(
          this.tempId,
          res.data._id,
          this.textAreas
        );
      } else {

      }*/
      new CreatedContent(localStorage).createdContent = res.data;
      new TextAreas(localStorage).rewriteValueKey(res.data._id, this.textAreas);

      //new CreatedContent(localStorage).createdContent = res.data;

      /*if (this.tempId !== res.data._id) {
        this.updateKey(res.data._id);
      }*/
    });
  }
}
</script>

<style lang="scss" scoped></style>

<!--При обновлении данных из формы одна форма перезаписывает другую. На бек отправляется при обдновлении формы один id, а возвращается id другой формы. Соответсвенно обнлвлятся другая форма с другим id -->
