import { useState } from "react";
import { WizardFormContext } from "./context/WizardFormContext";

import FormOne from "./FormOne";
import FormThree from "./FormThree";
import FormTwo from "./FormTwo";

const WizardForm = () => {
  const [pointer, setPointer] = useState(0);

  const triggerNextForm: () => void = () => {
    setPointer(pointer + 1);
  };

  const forms = [<FormOne />, <FormTwo />, <FormThree />];

  return (
    <>
      <WizardFormContext.Provider value={{ triggerNextForm }}>
        {forms[pointer]}
      </WizardFormContext.Provider>
    </>
  );
};

export default WizardForm;
