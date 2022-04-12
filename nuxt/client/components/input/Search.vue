<template>
  <div>
    <img
      class="search__image"
      src="../../assets/images/icons/search.svg"
      alt="search"
    />
    <input
      class="search__input"
      type="text"
      placeholder="Композиция, альбом, исполнитель ..."
    />
  </div>
</template>

<script>
import { Prop, Component, Vue, Watch, Emit } from 'nuxt-property-decorator';
export default class Search extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_vars.scss';

.search__image {
  position: relative;
  top: 3px;
  left: 40px;
  width: 20px;
  height: 20px;
}
.search__input {
  width: 20em;
  padding: 0.9em 1.5em;
  padding-left: 3em;
  border: 1px solid transparent;
  border-radius: 6px;
  outline: none;
}
.search__input::placeholder {
  font-family: $Lato;
  font-size: 0.9rem;

  color: $black;
  opacity: 0.6;
}
input::-webkit-input-placeholder {
  opacity: 1;
  transition: opacity 0.4s ease;
}
input::-moz-placeholder {
  opacity: 1;
  transition: opacity 0.4s ease;
}
input:-moz-placeholder {
  opacity: 1;
  transition: opacity 0.4s ease;
}
input:-ms-input-placeholder {
  opacity: 1;
  transition: opacity 0.4s ease;
}
input:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity 0.4s ease;
}
input:focus::-moz-placeholder {
  opacity: 0;
  transition: opacity 0.4s ease;
}
input:focus:-moz-placeholder {
  opacity: 0;
  transition: opacity 0.4s ease;
}
input:focus:-ms-input-placeholder {
  opacity: 0;
  transition: opacity 0.4s ease;
}
</style>
