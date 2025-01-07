const FormOne = () => {
  return (
    <form className="h-auto w-[25vw] p-6 rounded-md">
      <h1 className="text-2xl font-bold font-roboto">Basic Information</h1>
      <div className="flex flex-col w-full gap-4 my-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">First Name</p>
          <input
            placeholder="John"
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Last Name</p>
          <input
            placeholder="Doe"
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Email</p>
          <input
            placeholder="johndoe@example.com"
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Mobile Number</p>
          <input
            placeholder="+44 1234 567 890"
            className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Password</p>
          <input className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600">Confirm Password</p>
          <input className="border-gray-300 p-3 font-roboto text-sm placeholder:font-roboto placeholder:text-sm border rounded-md h-10 w-full" />
        </div>
      </div>
      <button className="h-auto w-full bg-blue-500 p-2 rounded-md">
        <p className="text-white font-roboto text-sm">Next</p>
      </button>
    </form>
  );
};

export default FormOne;
