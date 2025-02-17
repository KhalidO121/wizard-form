import { useFormContext } from "react-hook-form";

const TextField = ({ title }: { title: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-gray-600">{title}</p>
      <input
        {...register(title)}
        className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
      />
    </div>
  );
};

export default TextField;
