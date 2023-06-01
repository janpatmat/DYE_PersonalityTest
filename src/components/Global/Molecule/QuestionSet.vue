<template>
  <div class="container">
    <h3>{{ question }}</h3>
    <p>{{ group }}</p>
    <div class="container__choices">
      <Ncircle
        :index="1"
        :selected="selectedComponent === 1"
        @click="selectComponent(1)"
        v-bind:class="{ 'selected-component': selectedComponent === 1 }"
      />
      <VRcircle
        :index="2"
        :selected="selectedComponent === 2"
        @click="selectComponent(2)"
        v-bind:class="{ 'selected-component': selectedComponent === 2 }"
      />
      <Rcircle
        :index="3"
        :selected="selectedComponent === 3"
        @click="selectComponent(3)"
        v-bind:class="{ 'selected-component': selectedComponent === 3 }"
      />
      <Fcircle
        :index="4"
        :selected="selectedComponent === 4"
        @click="selectComponent(4)"
        v-bind:class="{ 'selected-component': selectedComponent === 4 }"
      />
      <VFcircle
        :index="5"
        :selected="selectedComponent === 5"
        @click="selectComponent(5)"
        v-bind:class="{ 'selected-component': selectedComponent === 5 }"
      />
      <Acircle
        :index="6"
        :selected="selectedComponent === 6"
        @click="selectComponent(6)"
        v-bind:class="{ 'selected-component': selectedComponent === 6 }"
      />
    </div>
    <div class="container__indicator">
      <h3>Never</h3>
      <h3>Always</h3>
    </div>
  </div>
  <hr />
</template>

<script>
import Ncircle from "../CircleChoice/circleNever.vue";
import Fcircle from "../CircleChoice/circleFrequently.vue";
import VFcircle from "../CircleChoice/circleVF.vue";
import VRcircle from "../CircleChoice/circleVR.vue";
import Rcircle from "../CircleChoice/circleRarely.vue";
import Acircle from "../CircleChoice/circleAlways.vue";

export default {
  components: {
    Ncircle,
    Fcircle,
    Acircle,
    Rcircle,
    VFcircle,
    VRcircle,
  },
  data() {
    return {
      selectedComponent: null,
    };
  },
  props: {
    question: {
      type: String,
      required: true,
    },
    questionId: {
      type: Number,
      required: true,
    },
    group:{
      type: String,
      required: true,
    }
  },
  methods: {
    selectComponent(index) {
      this.selectedComponent = index;
      const selectedText = this.getSelectedComponentText(index);
      
      this.$emit("circleSelected", { questionId: this.questionId, selectedText, group: this.group  });
      console.log(`Clicked index: ${index}`);
    },
    getSelectedComponentText(index) {
      // Return the text based on the index
      switch (index) {
        case 1:
          return -3;
        case 2:
          return -2;
        case 3:
          return -1;
        case 4:
          return 1;
        case 5:
          return 2;
        case 6:
          return 3;
        default:
          return "";
      }

    },
  },
};
  </script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem
  }
  
  .container__choices {
    display: flex;
    gap: 1rem;
  }
  
  .container__indicator {
    display: flex;
    gap: 20rem;
  }
  </style>
  