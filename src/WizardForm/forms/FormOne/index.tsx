import { useContext } from "react";
import { WizardFormContext } from "../../context/WizardFormContext";

import TextField from "../../../components/Fields/TextField";
import BaseForm from "../../../components/BaseForm";

const FormOne = () => {
  const { triggerNextForm } = useContext(WizardFormContext);

  const submitMethod = (data: object) => {
    console.log(data);
    triggerNextForm();
  };

  return (
    <BaseForm
      formTitle="Basic Information"
      buttonTitle="Next"
      submitMethod={submitMethod}
    >
      <TextField
        label="First Name"
        required
        maxLength={60}
        placeholder={"John"}
      />
      <TextField
        label="Last Name"
        required
        maxLength={60}
        placeholder={"Doe"}
      />
      <TextField label="Email" placeholder={"jdoe@mail.com"} required />
      <TextField label="Mobile Number" required placeholder={"+441234567890"} />
      <TextField label="Password" required={false} />
      <TextField label="Confirm Password" required={false} />
    </BaseForm>
  );
};

export default FormOne;
