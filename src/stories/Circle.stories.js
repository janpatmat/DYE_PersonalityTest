import MyButton from '../components/Global/Circle.vue';

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
    classname:'never'
  },
};

export const Very_Rarely = {
  args: {
    classname:'very_rarely'
    
  },
};

export const Rarely ={
  args:{
    classname:'rarely'
  }
}
export const Frequently = {
  args: {
    classname:'frequently'
  },
};

export const Very_Frequently = {
  args: {
    classname:'very_frequently'
    
  },
};

export const Always ={
  args:{
    classname:'always'
  }
}

