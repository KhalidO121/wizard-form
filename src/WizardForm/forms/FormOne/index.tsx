import { useContext } from "react";
import { WizardFormContext } from "../../context/WizardFormContext";

import TextField from "../../../components/Fields/TextField";
import BaseForm from "../../../components/BaseForm";

const FormOne = () => {
  const { triggerNextForm } = useContext(WizardFormContext);

  return (
    <BaseForm
      formTitle="Basic Information"
      buttonTitle="Next"
      submitMethod={triggerNextForm}
    >
      <TextField title="First Name" required maxLength={4} />
      <TextField title="Last Name" required />
      <TextField title="Email" required />
      <TextField title="Mobile Number" required />
      <TextField title="Password" required={false} />
      <TextField title="Confirm Password" required={false} />
    </BaseForm>
  );
};

export default FormOne;
