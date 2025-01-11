import { ReactNode } from "react";
import { useForm } from "react-hook-form";

const BaseForm = ({
  children,
  formTitle,
  buttonTitle,
  submitMethod,
}: {
  children: ReactNode;
  formTitle: string;
  buttonTitle: string;
  submitMethod: () => void;
}) => {
  const { handleSubmit } = useForm({});

  return (
    <form
      onSubmit={handleSubmit(submitMethod)}
      method="post"
      className="h-auto w-[25vw] p-6 rounded-md"
    >
      <h1 className="text-2xl font-bold font-roboto">{formTitle}</h1>
      <div className="flex flex-col w-full gap-4 my-5">{children}</div>
      <button
        type="submit"
        className="h-auto w-full bg-blue-500 p-2 rounded-md"
      >
        <p className="text-white font-roboto text-sm">{buttonTitle}</p>
      </button>
    </form>
  );
};

export default BaseForm;
