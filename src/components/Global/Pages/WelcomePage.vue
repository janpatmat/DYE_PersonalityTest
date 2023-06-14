<template>
  <h1>Welcome to the Davao Young Executives Character X-Ray</h1>
  <p>The Character X-Ray is part of the Davao Young Executives (DYE) program. The Character X-Ray is a report based on a questionnaire with 80 questions. It is a tool to help DYE participants learn about different aspects of character building. Their personalized Character X-Ray report helps them plan their character training actions with their mentor.</p>
    <div class="container">
        <div class="tipsContainer">
            <h3>Tip</h3>
            <p>Pause for each number and try to remember examples when you did each action and when you did the opposite.</p>
        </div>

        <div class="tipsContainer">
            <h3>Instruction</h3>
            <p>For each number below, select how habitual the action is, from never to always.
            Select the circle of your choice
            Click submit once you have finished
            You can only select <strong>one choice</strong></p>
        </div>
    </div>
<button class="startButton">Start Test</button>
</template>

<script>
import Button from '../../../stories/Button.vue'
export default {
  components: { Button },

}
</script>

<style>
.startButton{
    color: white;
    
}
.tipsContainer{
    border: 1;
    border-style: solid;
    padding: 0 2rem;
}
.container{
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
</style>