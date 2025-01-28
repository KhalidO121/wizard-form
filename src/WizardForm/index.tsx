import { useState } from "react";
import FormOne from "./FormOne";
import FormThree from "./FormThree";
import FormTwo from "./FormTwo";

const WizardForm = () => {
  const [pointer, setPointer] = useState(0);

  const triggerNextForm = () => {
    setPointer(pointer + 1);
  };

  const forms = [
    <FormOne handleCompletion={triggerNextForm} />,
    <FormTwo handleCompletion={triggerNextForm} />,
    <FormThree handleCompletion={triggerNextForm} />,
  ];

  return <>{forms[pointer]}</>;
};

export default WizardForm;
