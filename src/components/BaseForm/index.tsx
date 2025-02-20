import { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const BaseForm = ({
  children,
  formTitle,
  buttonTitle,
  submitMethod,
}: {
  children: ReactNode;
  formTitle: string;
  buttonTitle: string;
  submitMethod: (a: object) => void;
}) => {
  const schema = yup
    .object({
      firstName: yup.string().required(),
      age: yup.number().positive().integer().required(),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(submitMethod)}
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
    </FormProvider>
  );
};

export default BaseForm;
