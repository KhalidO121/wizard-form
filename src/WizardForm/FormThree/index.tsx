import { useContext } from "react";
import { WizardFormContext } from "../context/WizardFormContext";

import BaseForm from "../../components/BaseForm";
import TextField from "../../components/Fields/TextField";

const FormThree = () => {
  const { triggerNextForm } = useContext(WizardFormContext);
  return (
    <BaseForm
      formTitle="Personal Preferences"
      buttonTitle="Submit"
      submitMethod={triggerNextForm}
    >
      <TextField title="Preferred Communications Methods" />
      <TextField title="Marketing Preferences" />
      <TextField title="Account Visibility" />
    </BaseForm>
  );
};

export default FormThree;
