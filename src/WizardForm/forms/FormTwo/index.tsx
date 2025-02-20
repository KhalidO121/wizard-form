import { useContext } from "react";
import { WizardFormContext } from "../../context/WizardFormContext";

import BaseForm from "../../../components/BaseForm";
import TextField from "../../../components/Fields/TextField";

const FormTwo = () => {
  const { triggerNextForm } = useContext(WizardFormContext);
  return (
    <BaseForm
      formTitle="Personal Details"
      buttonTitle="Next"
      submitMethod={triggerNextForm}
    >
      <TextField label="Date of Birth" required />
      <TextField label="Gender" required />
      <TextField label="Country" required />
      <TextField label="State/Province" required />
      <TextField label="City" required />
      <TextField label="Postal Code" required />
      <TextField label="Profile Picture Upload" required={false} />
    </BaseForm>
  );
};

export default FormTwo;
