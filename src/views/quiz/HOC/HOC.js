import React, { Component } from 'react'

function HOC (Technology, QuestionList) {
    class HOCTech extends Component {

        constructor(props) {
            super(props);
            this.state = {
                questionBank : [],
                score : 0,
                responses : 0,
                questionIDs : []
            };
          }
    
          getQuestions = ()=>{
            QuestionList().then(question=>{
              this.setState({
                questionBank : question
              });
            });
          }

          handleOnChange = (e, CorrectAnswer, questionID)=>{
            // console.log(`e.target.value ${e.target.value} Correct Answer  ${CorrectAnswer} QuestionID ${questionID}`);
            if(this.state.questionIDs.includes(questionID)){
              this.setState({
                score : this.state.score - 1
              })
              if(e.target.value == CorrectAnswer){
                this.setState({
                  score : this.state.score + 1
                })
              }
            }
            else if(!this.state.questionIDs.includes(questionID)){
              this.setState({
                responses : this.state.responses+1,
                questionIDs : this.state.questionIDs.concat(questionID)
              })
              if(e.target.value == CorrectAnswer){
                this.setState({
                  score : this.state.score + 1
                })
              }
            }
          }
        
          componentDidMount(){
            this.getQuestions();
          }

        render(){
            return <Technology 
                        questionBank={this.state.questionBank} 
                        score={this.state.score}
                        responses={this.state.responses}
                        onChange={this.handleOnChange}
                    /> 
            
        };
    }
    return HOCTech;
}

export default HOC;