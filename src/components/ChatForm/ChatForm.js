import React, { useState } from 'react';
import './ChatForm.css';

const questions = [
  { id: 1, text: 'What is your name?', answers: ['John', 'Jane', 'Mike', 'Peter'] },
  { id: 2, text: 'What is your age?', answers: ['Under 18', '18-24', '25-34', '35+'] },
  { id: 3, text: 'What is your favorite color?', answers: ['Red', 'Blue', 'Green', 'Yellow'] },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelect = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="multistep-form-container">
      <div className="questions-container">
        <div className="question">
          <span className="question-text">{questions[currentStep].text}</span>
          {currentStep !== questions.length && (
            <span className="waiting-message">Waiting for response...</span>
          )}
        </div>
      </div>
      <div className="answers-container">
        {currentStep === questions.length ? (
          <div className="summary">
            <p>Thank you for completing the form!</p>
            <p>Your answers:</p>
            <ul>
              {answers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="answer-options">
            {questions[currentStep].answers.map((answer, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`answer-${index}`}
                  name="answer"
                  value={answer}
                  onChange={() => handleAnswerSelect(answer)}
                />
                <label htmlFor={`answer-${index}`}>{answer}</label>
              </div>
            ))}
          </div>
        )}
        {currentStep !== questions.length && (
          <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
