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
    <div v-for="(total, group) in totals" :key="group">
      Group {{ group }} Total: {{ total }}
    </div>
    <button @click="calculateTotals">Calculate Totals</button>
  </div>
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
      answerCounts: {},
      totals: {}
    };
  },
  components: {
    QuestionSetVue
  },
  methods: {
    accumulateSelectedText({ questionId, selectedText, group }) {
      if (!this.answerCounts.hasOwnProperty(group)) {
        this.answerCounts[group] = {};
      }
      if (!this.answerCounts[group].hasOwnProperty(questionId)) {
        this.answerCounts[group][questionId] = 0;
      }
      this.answerCounts[group][questionId] += selectedText;
    },
    calculateTotals() {
      this.totals = {};
      for (const group in this.answerCounts) {
        const groupAnswerCounts = Object.values(this.answerCounts[group]);
        const groupTotal = groupAnswerCounts.reduce((sum, value) => sum + value, 0);
        this.totals[group] = groupTotal;
      }
    }
  }
};
</script>

<style scoped>
/* Styles */
</style>
