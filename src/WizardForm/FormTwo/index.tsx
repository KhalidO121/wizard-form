import { useContext } from "react";
import { WizardFormContext } from "../context/WizardFormContext";

import BaseForm from "../../components/BaseForm";
import TextField from "../../components/Fields/TextField";

const FormTwo = () => {
  const { triggerNextForm } = useContext(WizardFormContext);
  return (
    <BaseForm
      formTitle="Personal Details"
      buttonTitle="Next"
      submitMethod={triggerNextForm}
    >
      <TextField title="Date of Birth" />
      <TextField title="Gender" />
      <TextField title="Country" />
      <TextField title="State/Province" />
      <TextField title="City" />
      <TextField title="Postal Code" />
      <TextField title="Profile Picture Upload" />
    </BaseForm>
  );
};

export default FormTwo;
