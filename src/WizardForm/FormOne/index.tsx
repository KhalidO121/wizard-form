import { useContext } from "react";
import { WizardFormContext } from "../context/WizardFormContext";

import TextField from "../../components/Fields/TextField";
import BaseForm from "../../components/BaseForm";

const FormOne = () => {
  const { triggerNextForm } = useContext(WizardFormContext);
  return (
    <BaseForm
      formTitle="Basic Information"
      buttonTitle="Next"
      submitMethod={triggerNextForm}
    >
      <TextField title="First Name" />
      <TextField title="Last Name" />
      <TextField title="Email" />
      <TextField title="Mobile Number" />
      <TextField title="Password" />
      <TextField title="Confirm Password" />
    </BaseForm>
  );
};

export default FormOne;
