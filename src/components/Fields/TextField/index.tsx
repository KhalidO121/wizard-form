import { useFormContext } from "react-hook-form";

type TextFieldProps = {
  label: string;
  required: boolean;
  maxLength?: number;
  [key: string]: unknown;
};

const TextField = ({
  label,
  required,
  maxLength = 100,
  ...rest
}: TextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const validationRules = {
    ...(required && {
      required: { value: true, message: `${label} is required` },
    }),
    ...(maxLength && {
      maxLength: { value: maxLength, message: `Max length is ${maxLength}` },
    }),
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
        {...register(label, validationRules)}
        {...rest}
      />
      {errors[label] && (
        <p className="text-red-600 text-sm">{`${errors[label].message}`}</p>
      )}
    </div>
  );
};

export default TextField;
