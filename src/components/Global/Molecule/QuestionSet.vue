<template>
    <div class="container">
        <h3>{{ question }}</h3>
    <div class="container__choices">

<Circle classname="never"/>
<Circle classname="very_rarely"/>
<Circle classname="rarely"/>
<Circle classname="frequently"/>
<Circle classname="very_frequently"/>
<Circle classname="always"/>
    </div>
    <div class="container__indicator">
        <h3>Never</h3>
        <h3>Always</h3>
    </div>
</div>
</template>

<script>
import Circle from '../Circle.vue'
export default {
components: {
    Circle,
},
props:{
    question:{
        type: String,
        required: true
    }
}
}
</script>

<style>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 
}
.container__choices{
    display: flex;
    gap: 1rem;
}
.container__indicator{
    display: flex;
    gap: 20rem;
}
</style>