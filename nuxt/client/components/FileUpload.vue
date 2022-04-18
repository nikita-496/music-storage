<template>
  <div class="file-upload" id="file" @click="getClicked">
    <input
      v-show="false"
      class="file-upload__input"
      type="file"
      :accept="accept"
      ref="input"
      @change="onChange"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator';
@Component
export default class FileUpload extends Vue {
  @Prop(String) accept: string;
  @Prop(String) name: string;
  public getClicked() {
    const input: HTMLElement = this.$refs.input as HTMLElement;
    input.click();
  }

  @Emit('onChangeFile')
  public onChange(ev: any) {
    const file = this.takeFile(ev);
    return file;
  }

  public takeFile(ev: any) {
    return ev.target.files[0];
  }
}
</script>
