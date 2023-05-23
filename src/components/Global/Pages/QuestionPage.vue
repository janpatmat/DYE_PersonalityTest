<template>
    <div>
      <QuestionSetVue v-for="question in questions" :key="question.id" :question="question.question" />
    </div>
  </template>
  
  <script>
  import QuestionSetVue from '../Molecule/QuestionSet.vue';
  
  export default {
    data() {
      return {
        questions: [
          { id: 1, question: 'My name is question number 1' },
          { id: 2, question: 'My name is question number 2' }
        ]
      };
    },
    components: {
      QuestionSetVue
    }
  };
  </script>
  
  <style scoped>
  .container {
    /* Styles for the container */
  }
  </style>
  