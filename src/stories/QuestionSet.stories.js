import set from '../components/Global/Molecule/QuestionSet.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Global/Molecule/QuestionSet',
  component: set,
  
  argTypes: {
    classname: 'QuestionSet'
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const primary = {
  args: {
    question: "1. When making important decisions, I do research and ask those who are knowledgeable in that area."
  },
};



