import MyButton from '../components/Global/CircleChoice/circleAlways.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Global/Circle',
  component: MyButton,
  
  argTypes: {
    classname: 'circle'
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Never = {
  args: {
    
  },
};

