import { useContext } from "react";
import { WizardFormContext } from "../../context/WizardFormContext";

import BaseForm from "../../../components/BaseForm";
import TextField from "../../../components/Fields/TextField";

const FormThree = () => {
  const { triggerNextForm } = useContext(WizardFormContext);
  return (
    <BaseForm
      formTitle="Personal Preferences"
      buttonTitle="Submit"
      submitMethod={triggerNextForm}
    >
      <TextField label="Preferred Communications Methods" required={false} />
      <TextField label="Marketing Preferences" required={false} />
      <TextField label="Account Visibility" required={false} />
    </BaseForm>
  );
};

export default FormThree;
