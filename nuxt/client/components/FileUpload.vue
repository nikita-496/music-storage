<template>
  <div>
    <input type="file" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    file: { type: String, required: true },
    setFile: { type: Function, required: true },
  },
};
</script>
