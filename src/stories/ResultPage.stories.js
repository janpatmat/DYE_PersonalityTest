import ResultPage from '../components/Global/Pages/ResultPage.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Global/Pages/Rpage',
  component: ResultPage,
  
  argTypes: {
    classname: 'ResultPage    '
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const primary = {
  args: {
    
  },
};



