<template>
  <div>
    <QuestionSetVue
      v-for="question in questions"
      :key="question.id"
      :question="question.question"
      :questionId="question.id"
      :group="question.group"
      @circleSelected="accumulateSelectedText"
    />
  </div>
  <button @click="submitFunc" >Hello</button>
</template>

<script>
import QuestionSetVue from '../Molecule/QuestionSet.vue';

export default {
  data() {
    return {
      questions: [
        { id: 1, question: 'Question 1 (Group A)', group: 'A' },
        { id: 2, question: 'Question 2 (Group A)', group: 'A' },
        { id: 3, question: 'Question 3 (Group B)', group: 'B' }
      ],
    };
  },
  components: {
    QuestionSetVue
  },
  methods: {
    accumulateSelectedText({ questionId, selectedText, group }) {
      console.log('Question ID:', questionId);
      console.log('Selected Text:', selectedText);
      console.log('Group:', group);
    },

    submitFunc(){
      this.accumulateSelectedText
    },
  }
};
</script>

<style scoped>
/* Styles */
</style>
