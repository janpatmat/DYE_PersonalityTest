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

  <div class="submitContainer"> <button @click="submitFunc" class="submitButton" >Submit</button></div>
 
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
        {id: 40, question: "40. I try to fit in by pretending to be someone I'm not.", group: [4,6,9], score: 0, multiplier: -1 },
        {id: 41, question: "41. I make friends with people I meet.", group: [7], score: 0, multiplier: 1 },
        {id: 42, question: "42. I complain when the traffic is bad.", group: [2,4], score: 0, multiplier: -1 },
        {id: 43, question: "43. I say things which I should not.", group: [2,3,5,6], score: 0, multiplier: -1 },
        {id: 44, question: "44. I respect the point of view of others.", group: [9], score: 0, multiplier: 1 },
        {id: 45, question: "45. People complain on how I always change my decisions.", group: [1], score: 0, multiplier: -1 },
        {id: 46, question: "46. When I get annoyed at someone, I talk to people about the bad things that that annoying person does.", group: [2,3,5], score: 0, multiplier: -1 },
        {id: 47, question: "47. I look down on people who are unpopular.", group: [6,7,9], score: 0, multiplier: -1 },
        {id: 48, question: "48. My room is orderly.", group: [2,10], score: 0, multiplier: 1 },
        {id: 49, question: "49. I thank people.", group: [3,5,7], score: 0, multiplier: 1 },
        {id: 50, question: "50. I do things for others even if it there is nothing in it for me.", group: [1,4], score: 0, multiplier: 1 },
        {id: 51, question: "51. I need to have certain brands of clothes or gadgets.", group: [2,9], score: 0, multiplier: -1 },
        {id: 52, question: "52. I mention myself as a good example in conversations.", group: [9], score: 0, multiplier: -1 },
        {id: 53, question: "53. Before I read a book or watch a movie, I check with a trustworthy source whether it would have a positive or negative effect on me.", group: [1], score: 0, multiplier: 1 },
        {id: 54, question: "54. When people are saying bad things about my a friend, I try to change the conversation.", group: [3], score: 0, multiplier: 1 },
        {id: 55, question: "55. I trust people.", group: [5,6], score: 0, multiplier: 1 },
        {id: 56, question: "56. I admit my mistakes.", group: [4,6], score: 0, multiplier: 1 },
        {id: 57, question: "57. I get along with people even if I disagree with their ideas.", group: [5,7], score: 0, multiplier: 1 },
        {id: 58, question: "58. I stand by my principles.", group: [4], score: 0, multiplier: 1 },
        {id: 59, question: "59. I lose my temper.", group: [2,5], score: 0, multiplier: -1 },
        {id: 60, question: "60. I visit websites even if I know they would have a negative effect on me.", group: [1,2], score: 0, multiplier: -1 },
        {id: 61, question: "61. I gossip.", group: [2,3,5,6], score: 0, multiplier: -1 },
        {id: 62, question: "62. If a friend is planning to do something wrong, I try to talk him out of it.", group: [4,6,8], score: 0, multiplier: 1 },
        {id: 63, question: "63. I try to understand people who don't share my points of view.", group: [5,7], score: 0, multiplier: 1 },
        {id: 64, question: "64. I crave for the praise of people.", group: [4,9], score: 0, multiplier: -1 },
        {id: 65, question: "65. I practice good manners, especially with the opposite sex.", group: [2,5], score: 0, multiplier: 1 },
        {id: 66, question: "66. I speak badly about myself, so that others may contradict me and mention my good characteristics.", group: [9], score: 0, multiplier: -1 },
        {id: 67, question: "67. My decisions are easily swayed by peer pressure.", group: [1,2,4], score: 0, multiplier: -1 },
        {id: 68, question: "68. I hold my tongue in order to respect the private lives of people.", group: [2,3,5,6,8], score: 0, multiplier: 1 },
        {id: 69, question: "69. People feel comfortable around me.", group: [2,7], score: 0, multiplier: 1 },
        {id: 70, question: "70. Fear of failure prevents me from doing ambitious things.", group: [4], score: 0, multiplier: -1 },
        {id: 71, question: "71. I make excuses when I am rebuked.", group: [9], score: 0, multiplier: -1 },
        {id: 72, question: "72. My decisions depend on my mood.", group: [1], score: 0, multiplier: -1 },
        {id: 73, question: "73. My mother or father has to force me to study.", group: [2,3,5], score: 0, multiplier: -1 },
        {id: 74, question: "74. I avoid doing things because they require a lot of effort.", group: [2,4], score: 0, multiplier: -1 },
        {id: 75, question: "75. I fail to fulfill promises because of inconvenience.", group: [2,3], score: 0, multiplier: -1 },
        {id: 76, question: "76. I get impatient with people.", group: [2,4], score: 0, multiplier: -1 },
        {id: 77, question: "77. I make fun of people who are different.", group: [3,5], score: 0, multiplier: -1 },
        {id: 78, question: "78. I don't get to finish what I start.", group: [4], score: 0, multiplier: -1 },
        {id: 79, question: "79. I find it hard to say no to people.", group: [4], score: 0, multiplier: -1 },
        {id: 80, question: "80. My bag is clean and orderly.", group: [10], score: 0, multiplier: 1 },
        
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

    // submitFunc(){
      
    //   console.log('Group:', this.groups);
    //   this.$router.push('/result');
    // },
  }
};
</script>

<style scoped>
/* Styles */
.submitButton{
  background-color: gray;
  border: 0;
  padding:0.5rem 2rem;
  border-radius: 1rem; 
  font-weight: bold;
  color:white
}

.submitContainer{
  display:flex;
  align-content: center;
  justify-content: center;
}
</style>
