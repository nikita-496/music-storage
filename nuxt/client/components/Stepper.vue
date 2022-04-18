<template>
  <list class="stepper">
    <template v-slot:header>
      <li class="list__items" v-for="(step, i) in steps" :key="step.desc">
        <span
          :class="
            step.isActive
              ? 'stepper__round stepper__round_active'
              : step.isDone
              ? 'stepper__round stepper__round_done'
              : 'stepper__round stepper__round_next'
          "
        ></span>
        <div class="stepper_done-wrapper" v-if="step.isDone">
          <div class="stepper_done-check-sign stepper_done-check-part-1"></div>
          <div class="stepper_done-check-sign stepper_done-check-part-2"></div>
        </div>
        <span
          :class="step.isActive ? 'stepper_active' : 'stepper_next'"
          v-else
          >{{ i + 1 }}</span
        >
        <span class="stepper__action">{{ step.desc }}</span>
      </li>
    </template>
  </list>
</template>

<script lang="ts">
import List from './List.vue';
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator';

@Component({
  components: {
    List
  }
})
export default class Stepper extends Vue {
  @Prop(Number) activeStep: number;
  private steps: [] = [
    { desc: 'Инфоормация о треке', isDone: false, isActive: true },
    { desc: 'Загрузка обложки', isDone: false, isActive: false },
    { desc: 'Загрузка трека', isDone: false, isActive: false }
  ];
  @Watch('activeStep')
  changeStep(newVal: number) {
    switch (newVal) {
      case 2:
        let doneStep = this.steps[0];
        doneStep.isDone = true;
        doneStep.isActive = false;
        let activeStep = this.steps[1];
        activeStep.isDone = false;
        activeStep.isActive = true;
        let nexStep = this.steps[2];
        nexStep.isDone = false;
        nexStep.isActive = false;
        break;
      case 3:
        doneStep = this.steps[1];
        doneStep.isDone = true;
        doneStep.isActive = false;
        activeStep = this.steps[2];
        activeStep.isDone = false;
        activeStep.isActive = true;

        break;
      default:
        activeStep = this.steps[0];
        activeStep.isDone = false;
        activeStep.isActive = true;
        nexStep = this.steps[1];
        nexStep.isDone = false;
        nexStep.isActive = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
.stepper {
  display: flex;
  justify-content: space-between;
  padding: 0em;
}
.stepper__round {
  content: '';
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid green;
  border-radius: 50%;
  background-color: green;
  position: relative;
  top: 2em;
}
.stepper__round_active {
  border: 1px solid rgb(12, 127, 204);
  background-color: rgb(12, 127, 204);
}
.stepper__round_done {
  border: 1px solid rgb(15, 161, 22);
  background-color: rgb(15, 161, 22);
}
.stepper_active,
.stepper_next {
  position: relative;
  top: 0.19em;
  left: 0.52em;
  z-index: 1000;
  font-size: 1.2rem;
  color: $white;
}
.stepper_next {
  left: -1em;
}
.stepper_done-wrapper {
  position: relative;
  margin-top: 1em;
  margin-left: 0.2em;
}

.stepper_done-check-sign {
  position: absolute;
  background: $white;
}

.stepper_done-check-part-1 {
  width: 10px;
  height: 4px;
  transform: rotate(45deg);
}

.stepper_done-check-part-2 {
  width: 20px;
  height: 4px;
  transform: rotate(-45deg);
  left: 5px;
  top: -1px;
}
.stepper__action,
.stepper_next {
  display: inline-block;
  margin-left: 1.5em;
}

.stepper__round_next {
  border: 1px solid $second-gray;
  background: $second-gray;
}
</style>
