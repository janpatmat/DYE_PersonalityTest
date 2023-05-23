<template>
    <div class='always'></div>
  </template>
  
  <script>
  export default {
    props: {
      index: {
        type : Number,
        required: true
      },
      selected: {
        type: Boolean,
        required: true
      }
    },
    methods: {
     
    }
  }
  </script>
  <style>
  
  .always{
      width: 50px;
      height: 50px;
      border: 3px;
      border-style: solid;
      border-radius: 50%;
      border-color: #368956;
  }
  .selected-component {
  background-color: pink;
}

  </style>