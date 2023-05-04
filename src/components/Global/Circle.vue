<template>
  <div :class='classname'  @click="handleClick"></div>
</template>

<script>
export default {
  props: {
    classname: {
      type : String,
      required: true
    }
  },
  methods: {
    handleClick() {
      // Set the background color to red
      this.$el.style.backgroundColor = 'red';
    }
  }
}
</script>
<style>
.never{
    width: 50px;
    height: 50px;
    border: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: #6464C3;
}
.very_rarely{
    width: 40px;
    height: 40px;
    border: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: #6464C3;
}
.rarely{
    width: 30px;
    height: 30px;
    border: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: #6464C3;
}
.frequently{
    width: 30px;
    height: 30px;
    border: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: #368956;
}
.very_frequently{
    width: 40px;
    height: 40px;
    border: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: #368956;
}
.always{
    width: 50px;
    height: 50px;
    border: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: #368956;
}
</style>