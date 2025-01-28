import BaseForm from "../../components/BaseForm";
import TextField from "../../components/Fields/TextField";

const FormThree = ({ handleCompletion }: { handleCompletion: () => void }) => {
  return (
    <BaseForm
      formTitle="Personal Preferences"
      buttonTitle="Submit"
      submitMethod={handleCompletion}
    >
      <TextField title="Preferred Communications Methods" />
      <TextField title="Marketing Preferences" />
      <TextField title="Account Visibility" />
    </BaseForm>
  );
};

export default FormThree;
