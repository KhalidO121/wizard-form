import { useFormContext } from "react-hook-form";

type TextFieldProps = {
  title: string;
  required: boolean;
  maxLength?: number;
};

const TextField = ({ title, required, maxLength = 5 }: TextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const validationRules = {
    ...(required && {
      required: { value: true, message: `${title} is required` },
    }),
    ...(maxLength && {
      maxLength: { value: maxLength, message: `Max length is ${maxLength}` },
    }),
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-gray-600">{title}</p>
      <input
        {...register(title, validationRules)}
        className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
      />
      {errors[title] && (
        <p className="text-red-600 text-sm">{`${errors[title].message}`}</p>
      )}
    </div>
  );
};

export default TextField;
