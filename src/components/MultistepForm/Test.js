import { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <form >
      {step === 1 && (
        <div>
          <label>
            What is the name of your ship? (business)
            <input type="text" name="busiName" />
          </label>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <label>
            Which industry best describes your business, me hearty?
            <input type="text" name="describesBusi" />
          </label>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
    </form>
  );
}
export default MultiStepForm;