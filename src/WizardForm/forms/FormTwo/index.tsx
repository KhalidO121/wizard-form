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
      <TextField title="Date of Birth" required />
      <TextField title="Gender" required />
      <TextField title="Country" required />
      <TextField title="State/Province" required />
      <TextField title="City" required />
      <TextField title="Postal Code" required />
      <TextField title="Profile Picture Upload" required={false} />
    </BaseForm>
  );
};

export default FormTwo;
