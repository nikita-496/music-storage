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
import Stepper from '../../components/Stepper.vue';
import TrackService from '../../service/TrackService';
export default {
  components: { Stepper, ActionButton, AppInput, FileUpload },
  name: 'create',
  layout: 'publicLayout',
  data() {
    return {
      track: { name: '', artist: '', album: '', picture: '', audio: '' },
      activeStep: 1,
      placeholders: ['Название трека', 'Имя исполнителя', 'Альбом']
    };
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
      formData.append('picture', this.track.picture);
      formData.append('audio', this.track.audio);
      TrackService.save(formData);
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
