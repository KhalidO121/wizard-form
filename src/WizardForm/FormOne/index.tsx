import TextField from "../../components/Fields/TextField";
import BaseForm from "../../components/BaseForm";

const FormOne = () => {
  return (
    <BaseForm formTitle="Basic Information" buttonTitle="Next">
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
