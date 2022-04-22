<template>
  <main class="main">
    <div class="container">
      <stepper :activeStep="activeStep" />
      <div class="card">
        <template v-if="activeStep === 1">
          <app-input
            class="create__input"
            v-for="n in 3"
            :key="n"
            :value="placeholders[n - 1]"
            @onChangeValue="setTrackData"
          ></app-input>
          <app-select
            :genreOptions="options.genres"
            @onChangeSelected="setGenres"
          >
          </app-select>
          <app-select :tagOptions="options.tags" @onChangeSelected="setTags">
          </app-select>
        </template>
        <template v-if="activeStep === 2">
          <file-upload
            :accept="'image/*'"
            :name="'files'"
            @onChangeFile="setPicture"
          >
            <action-button @click.prevent>
              <p class="action-button__content" slot="text">
                Загрузить изображение
              </p>
            </action-button>
          </file-upload>
        </template>
        <template v-if="activeStep === 3">
          <file-upload
            :accept="'audio/*'"
            :name="'files'"
            @onChangeFile="setAudio"
          >
            <action-button @click.prevent>
              <p class="action-button__content" slot="text">Загрузить трек</p>
            </action-button>
          </file-upload>
        </template>
      </div>
      <div class="action">
        <action-button
          :isDisabled="activeStep === 1 ? true : false"
          @changeStep="decreaseStep"
        >
          <p class="action-button__content" slot="text">Назад</p>
        </action-button>
        <action-button v-if="activeStep === 3" @send="create" :isLast="true">
          <p class="action-button__content" slot="text">Создать трек</p>
        </action-button>
        <action-button v-else @changeStep="increaseStep">
          <p class="action-button__content" slot="text">Вперед</p>
        </action-button>
      </div>
    </div>
  </main>
</template>

<script>
import ActionButton from '../../components/ActionButton.vue';
import FileUpload from '../../components/FileUpload.vue';
import AppInput from '../../components/input/AppInput.vue';
import AppSelect from '../../components/input/AppSelect.vue';
import Stepper from '../../components/Stepper.vue';
import TrackService from '../../service/TrackService';

import { mapGetters } from 'vuex';

export default {
  components: { Stepper, ActionButton, AppInput, FileUpload, AppSelect },
  name: 'create',
  layout: 'publicLayout',
  data() {
    return {
      track: {
        name: '',
        artist: '',
        album: '',
        genre: [],
        tag: [],
        picture: '',
        audio: ''
      },
      placeholders: ['Название трека', 'Имя исполнителя', 'Альбом'],
      options: {
        genres: [
          'Поп',
          'Металл',
          'Танцевальная музыка',
          'Звуки природы',
          'Советская музыка',
          'Рок',
          'Альтернатива',
          'Реп и хип-хоп',
          'Классическая музыка',
          'Электронная музыка'
        ],
        tags: ['Новинки', 'Тренды']
      },
      activeStep: 1
    };
  },
  created() {
    if (this.getTrackToUdpdate) {
      this.track = this.getTrackToUdpdate;
    }
  },
  computed: {
    ...mapGetters({
      getTrackToUdpdate: 'track/getTrackToUdpdate'
    })
  },
  methods: {
    increaseStep() {
      this.activeStep++;
    },
    decreaseStep() {
      this.activeStep--;
    },
    setTrackData(inputValue) {
      const placeholder = inputValue.placeholder;
      let trackKey;
      placeholder === 'Название трека'
        ? (trackKey = 'name')
        : placeholder === 'Имя исполнителя'
        ? (trackKey = 'artist')
        : (trackKey = 'album');
      this.track[trackKey] = inputValue.val;
    },
    setGenres(genres) {
      this.track.genre = genres;
    },
    setTags(tags) {
      this.track.tag = tags;
    },
    setPicture(file) {
      this.track.picture = file;
    },
    setAudio(file) {
      this.track.audio = file;
    },
    create() {
      const formData = new FormData();
      formData.append('name', this.track.name);
      formData.append('artist', this.track.artist);
      formData.append('genre', this.track.genre);
      formData.append('tag', this.track.tag);
      formData.append('picture', this.track.picture);
      formData.append('audio', this.track.audio);
      TrackService.save(formData, this.track._id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_vars.scss';
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: $white;
  height: 20em;
  margin-bottom: 5em;
}
.create__input {
  width: 38em;
}
.action {
  display: flex;
  justify-content: space-between;
}
</style>
