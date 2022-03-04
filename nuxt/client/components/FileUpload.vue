<template>
  <div class="file-upload" data-test="file-upload" @click="getClicked">
    <input
      v-show="false"
      class="file-upload__input"
      type="file"
      ref="input"
      @change="onChange"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    getClicked() {
      this.$refs.input.click();
    },
    onChange(ev) {
      const file = this.takeFile(ev);
      this.$emit('on-change-file', file);
    },

    takeFile(ev) {
      return ev.target.files[0];
    },
  },
};
</script>
