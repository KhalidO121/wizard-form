import { ReactNode } from "react";

const BaseForm = ({
  children,
  formTitle,
  buttonTitle,
}: {
  children: ReactNode;
  formTitle: string;
  buttonTitle: string;
}) => {
  return (
    <form className="h-auto w-[25vw] p-6 rounded-md">
      <h1 className="text-2xl font-bold font-roboto">{formTitle}</h1>
      <div className="flex flex-col w-full gap-4 my-5">{children}</div>
      <button className="h-auto w-full bg-blue-500 p-2 rounded-md">
        <p className="text-white font-roboto text-sm">{buttonTitle}</p>
      </button>
    </form>
  );
};

export default BaseForm;
