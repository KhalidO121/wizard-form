const FormThree = () => {
  return (
    <form className="h-auto w-[25vw] p-6 rounded-md">
      <h1 className="text-2xl font-bold font-roboto">Personal Preferences</h1>
      <div className="flex flex-col w-full gap-4 my-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">
            Preferred Communications Methods
          </p>
          <input
            placeholder="John"
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Marketing Preferences</p>
          <input
            placeholder="Doe"
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Account Visibility</p>
          <input
            placeholder="johndoe@example.com"
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
      </div>
      <button className="h-auto w-full bg-blue-500 p-2 rounded-md">
        <p className="text-white font-roboto text-sm">Next</p>
      </button>
    </form>
  );
};

export default FormThree;
