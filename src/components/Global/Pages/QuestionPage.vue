<template>
  <div>
    <QuestionSetVue
      v-for="question in questions"
      :key="question.id"
      :question="question.question"
      :questionId="question.id"
      :group="question.group"
      @circleSelected="accumulateSelectedText"
    />
  </div>
  <button @click="submitFunc" >Hello</button>
</template>

<script>
import QuestionSetVue from '../Molecule/QuestionSet.vue';

export default {
  data() {
    return {
      questions: [
       { id: 1, question: '1. When making important decisions, I do research and ask those who are knowledgeable in that area.', group: [1,10], score: 0, multiplier: 1},
        { id: 2, question: '2. I extend and extend entertaining activities (for instance, computer games and channel surfing) even though a voice inside my head is already telling me to stop.', group: [2,10], score: 0, multiplier: -1} ,
        {id: 3, question: '3. When I borrow something I return it at the time I promised to return it.', group: [7,3], score: 0, multiplier: 1 },
        {id: 4, question: '4. I wake up at a set time.', group: [2,4,10], score: 0, multiplier: 1 },
        {id: 5, question: '5. I make an effort to make my parents smile.', group: [3,8], score: 0, multiplier: 1 },
        {id: 6, question: "6. I try to impress people by pretending to have something I don't have.", group: [6,9], score: 0, multiplier: -1 },
        {id: 7, question: "7. I smile.", group: [7], score: 0, multiplier: 1 },
        {id: 8, question: "8. I am late for my appointments.", group: [8,10], score: 0, multiplier: -1 },
        {id: 9, question: "9. I am ashamed of not having some material possessions.", group: [6,9], score: 0, multiplier: -1 },
        {id: 10, question: "10. I make imporant decisions without serious thought.", group: [1,10], score: 0, multiplier: -1 },
        {id: 11, question: "11. I see things in society which are wrong, and I dream of making a difference.", group: [3], score: 0, multiplier: 1 },
        {id: 12, question: "12. I tell the truth even if it is inconvenient for me.", group: [6], score: 0, multiplier: 1 },
        {id: 13, question: "13. I make sacrifices for the sake of my friends.", group: [4,8], score: 0, multiplier: 1 },
        {id: 14, question: "14. I do my assignments even if I don't feel like it.", group: [2,4,10], score: 0, multiplier: 1 },
        {id: 15, question: "15. I overeat.", group: [2], score: 0, multiplier: -1 },
        {id: 16, question: "16. What I do or say is better that what others do or say.", group: [1,4], score: 0, multiplier: -1 },
        {id: 17, question: "17. I do the right thing even if it is difficult.", group: [9], score: 0, multiplier: -1 },
        {id: 18, question: "18. I always try to return favors.", group: [3], score: 0, multiplier: 1 },
        {id: 19, question: "19. I bend the truth to get out of a difficult situation.", group: [6], score: 0, multiplier: -1 },
        {id: 20, question: "20. I make sacrifices for the sake of family.", group: [4,5,8], score: 0, multiplier: 1 },
        {id: 21, question: "21. I push myself to be better at a skill, a talent or a sport.", group: [4], score: 0, multiplier: 1 },
        {id: 22, question: "22. I give in to my cravings.", group: [2], score: 0, multiplier: -1 },
        {id: 23, question: "23. I insist on doing things my way.", group: [9], score: 0, multiplier: -1 },
        {id: 24, question: "24. I don't do what I'm supposed to do because I don't feel like it.", group: [1,2], score: 0, multiplier: -1 },
        {id: 25, question: "25. I put extra care in things I borrow from other people.", group: [3,8], score: 0, multiplier: 1 },
        {id: 26, question: "26. I try to forget about a problem rather than face it.", group: [2,4,6], score: 0, multiplier: -1 },
        {id: 27, question: "27. I tell stories to entertain my friends or family.", group: [7], score: 0, multiplier: 1 },
        {id: 28, question: "28. I complain when I don't like the food served.", group: [2,4], score: 0, multiplier: -1 },
        {id: 29, question: "29. I lose my self-control.", group: [2], score: 0, multiplier: -1 },
        {id: 30, question: "30. I argue when I am not right, or when I am, I insist stubbornly with bad manners.", group: [2,5], score: 0, multiplier: -1 },
        {id: 31, question: "31. Before doing something, I think first whether it is right or wrong.", group: [1,10], score: 0, multiplier: 1 },
        {id: 32, question: "32. When rules become inconvenient for me, I tend not to follow them.", group: [2,3], score: 0, multiplier: -1 },
        {id: 33, question: "33. As long as it benefits me, I say harmless lies, since they are harmless anyway.", group: [6], score: 0, multiplier: -1 },
        {id: 34, question: "34. People ask for my help.", group: [7,8], score: 0, multiplier: 1 },
        {id: 35, question: "35. I complain when it is too cold or too hot.", group: [2,4], score: 0, multiplier: -1 },
        {id: 36, question: "36. I go beyond my budget.", group: [2,10], score: 0, multiplier: -1 },
        {id: 37, question: "37. I give my opinion even if it will not do any good.", group: [9], score: 0, multiplier: -1 },
        {id: 38, question: "38. I don't get to do something because it takes me too long to decide.", group: [1], score: 0, multiplier: -1 },
        {id: 39, question: "39. I do the chores assigned to me.", group: [2,3,5], score: 0, multiplier: 1 },
        {id: 40, question: "40. I try to fit in by pretending to be someone I'm not.", group: [4,6,9], score: 0, multiplier: 1 },
        
      ],
      x: 0,
      y:0,
      groups:{
        1:0, //wisdom
        2:0, //Self-discipline
        3:0, // Justice
        4:0, //Courage
        5:0, //Respect
        6:0, //Sencerity
        7:0, //Cheerfulness
        8:0, //Loyality
        9:0, //Humility
        10:0, //Order
      }
      

    };
   
  },
  components: {
    QuestionSetVue
  },
  methods: {
    
    accumulateSelectedText({ questionId, selectedText}) {
      this.groups ={
        1:0, //wisdom
        2:0, //Self-discipline
        3:0, // Justice
        4:0, //Courage
        5:0, //Respect
        6:0, //Sencerity
        7:0, //Cheerfulness
        8:0, //Loyality
        9:0, //Humility
        10:0, //Order
      }
     this.x = questionId;
      this.questions = this.questions.map(question =>{
        if(question.id === questionId){
          question.score = selectedText
        }
        return question
      } );

      this.questions.forEach((question)=>{
        question.group.forEach((groupNumber)=>{
          this.groups[groupNumber] += question.score * question.multiplier
        })
      })
      
      
      // console.log(questionId);

      //group1 = [3,4]
      
      //group2 = [1]

      // switch(group){
      //   case 1:
      //     this.justice.push(selectedText)
      //     jCount++
      //     break
      //   case 2:
      //   this.prudence[pCount] = selectedText
      //   pCount++;
      //     break
      //   default:
      //     return 0
      // }

    },

    submitFunc(){
      
      console.log('Group:', this.groups);
    },
  }
};
</script>

<style scoped>
/* Styles */
</style>
