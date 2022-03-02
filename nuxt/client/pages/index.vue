<template>
  <div>
    <admin-editor />
    <nav-bar />
  </div>
</template>

<script lang="ts">
import AdminEditor from '../components/form/AdminEditor.vue';
import NavBar from '../components/NavBar.vue';
export default {
  components: { AdminEditor, NavBar }
};
</script>
