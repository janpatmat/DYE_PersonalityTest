import QuestionPage from '../components/Global/Pages/QuestionPage.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Global/Pages/Qpage',
  component: QuestionPage,
  
  argTypes: {
    classname: 'QuestionPage    '
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const primary = {
  args: {
    
  },
};



