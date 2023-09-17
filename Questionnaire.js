import React, { Component } from "react"; // import react component
import "../index.css"; // import styling in index.css

class Create extends Component {
  constructor() {
    super();
    this.state = {
      // questions and selection of option
      questions: [
        {
          id: 1,
          text: "Computer is the invention of the Century",
          selectedOption: "neutral",
        },
        {
          id: 2,
          text: "Computer is the invention of the Century",
          selectedOption: "neutral",
        },
        {
          id: 3,
          text: "Computer is the invention of the Century",
          selectedOption: "neutral",
        },
        {
          id: 4,
          text: "Computer is the invention of the Century",
          selectedOption: "neutral",
        },
      ],
    };
  }

// handle selection of a question
  handleOptionChange = (event, questionId) => {
    const { questions } = this.state;
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, selectedOption: event.target.value };
      }
      return question;
    });

    this.setState({
      questions: updatedQuestions,
    });
  };

  handleSubmit = () => {
    // You can perform the submit action
    console.log("Questionnaire data submitted:", this.state.questions);
  };

  render() {
    // creating radio buttions
    return (
      <div>
        <h1>Creating a Questionnaire</h1>
        <button>Add</button>
        <h2>List of Questions</h2>
        {this.state.questions.map((question) => (
          <div key={question.id}>
            <h3>{question.text}</h3>
            <label>
              <input
                type="radio"
                value="agree"
                checked={question.selectedOption === "agree"}
                onChange={(event) =>
                  this.handleOptionChange(event, question.id)
                }
              />
              Agree
            </label>
            <label>
              <input
                type="radio"
                value="neutral"
                checked={question.selectedOption === "neutral"}
                onChange={(event) =>
                  this.handleOptionChange(event, question.id)
                }
              />
              Neutral
            </label>
            <label>
              <input
                type="radio"
                value="disagree"
                checked={question.selectedOption === "disagree"}
                onChange={(event) =>
                  this.handleOptionChange(event, question.id)
                }
              />
              Disagree
            </label>
          </div>
        ))}
        
        {/* Submit Button */}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Create;



